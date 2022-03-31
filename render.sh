#!/bin/bash
# ./render.sh <project_dir> <just_command>
set -euo pipefail
ROOT_DIR=$PWD
RUN_DIR="$ROOT_DIR/$1"
JUST_COMMAND="$2"

export BIN_DIR=$ROOT_DIR/bin
PATH=$BIN_DIR:$PATH
# shellcheck disable=SC2034
export CARGO_HOME="$XDG_CACHE_HOME"/cargo
export CARGO_TARGET_DIR="$XDG_CACHE_HOME"/cargo/target

function show() {
    echo "$@"
    "$@"
}

# GNU which doesn't have a silence option, so we simulate it with this function
function which() {
    /usr/bin/env which "$@" > /dev/null
    return $?
}

# download <bin> <url> <tar_args> <untar_target>
function download() {
    local BIN="$1"
    local URL="$2"
    local TAR_ARGS="${3:-}"
    local UNTAR_TARGET="${4:-}"

    local CACHE_DIR="$XDG_CACHE_HOME"
    local TAR_FILENAME="$BIN".tar.gz
    local CACHE_FILENAME="$CACHE_DIR"/"$BIN"
    : "${UNTAR_TARGET:="$BIN"}"

    if ! show which "$BIN"; then
        if ! test -e "$CACHE_FILENAME"; then
            show curl -sLo "$TAR_FILENAME" "$URL"
            show tar xzvf "$TAR_FILENAME" $TAR_ARGS -C "$CACHE_DIR" "$UNTAR_TARGET"
            show rm "$TAR_FILENAME"
        fi
        show cp "$CACHE_FILENAME" "$BIN_DIR"/"$BIN"
    fi
}

if ! test -z "${BUILD:-}"; then
    show mkdir -p "$BIN_DIR"

    URL="https://github.com/casey/just/releases/download/0.10.5/just-0.10.5-x86_64-unknown-linux-musl.tar.gz"
    download just "$URL"

    URL="https://github.com/sharkdp/fd/releases/download/v8.3.0/fd-v8.3.0-x86_64-unknown-linux-musl.tar.gz"
    download fd "$URL" "--strip-components 1" fd-v8.3.0-x86_64-unknown-linux-musl/fd

    if ls /etc/secrets/.npmrc 2>/dev/null && ! show ls $HOME/.npmrc; then
        show cp /etc/secrets/.npmrc $HOME/.npmrc
    fi
fi

show cd "$RUN_DIR"

just "$JUST_COMMAND"