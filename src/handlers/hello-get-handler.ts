import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export default async function helloGetHandler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
    const { multiValueHeaders, pathParameters, multiValueQueryStringParameters } = event;
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
            req: {
                headers: multiValueHeaders,
                pathParameters,
                queryStringParameters: multiValueQueryStringParameters,
            },
        }),
    };
}
