terraform {
  required_providers {
    aws       = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
    namecheap = {
      source  = "localhost/namecheap/namecheap"
      version = "2.1.1"
    }
  }
  backend "local" {
    path = ".state/terraform.tfstate"
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}

provider "namecheap" {
  user_name   = var.NAMECHEAP_USERNAME
  api_user    = var.NAMECHEAP_USERNAME
  api_key     = var.NAMECHEAP_API_KEY
  client_ip   = var.NAMECHEAP_IP
  use_sandbox = var.NAMECHEAP_USE_SANDBOX
}