import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export default async function helloResourceHandler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
    const { multiValueHeaders, pathParameters, multiValueQueryStringParameters, body, requestContext } = event;
    const reply: { result: string | null } = { result: null };
    let statusCode = 200;
    switch (requestContext.httpMethod) {
        case 'GET':
            reply.result = pathParameters ? 'result from getter' : 'result from lister';
            break;
        case 'POST':
            reply.result = 'result from poster';
            statusCode = 201;
            break;
        case 'PUT':
            reply.result = 'result from putter';
            break;
        case 'PATCH':
            reply.result = 'result from patcher';
            break;
        case 'DELETE':
            reply.result = 'result from deleter';
            statusCode = 204;
            break;
    }
    return {
        statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
            req: {
                method: requestContext.httpMethod,
                headers: multiValueHeaders,
                pathParameters,
                queryStringParameters: multiValueQueryStringParameters,
                body,
            },
            reply,
        }),
    };
}
