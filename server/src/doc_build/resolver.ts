import {IResolvers} from "@graphql-tools/utils"
import {GraphQLContext} from "src/gql/context"
import {create_job} from "../job/controller"


interface CreateDocsBuildArgs {
    package: string
    version?: string
}


interface CreateDocsBuildResponse {
    build_id: string
}

export const doc_build_resolvers: IResolvers = {
    Query: {
        current_queue: async (_obj: any, _args: any, _context: GraphQLContext): Promise<any[]> => {
            return []
        },
    },
    Mutation: {
        create_docs_build: async (_: any, args: CreateDocsBuildArgs, _context: GraphQLContext): Promise<CreateDocsBuildResponse> => {
            const job = await create_job("build", {
                package: args.package,
                version: args.version,
            })
            return  {
                build_id: job.uuid,
            }
        },
    },
}