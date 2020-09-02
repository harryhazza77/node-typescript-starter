import { APIGatewayProxyHandler } from 'aws-lambda';

const handler: APIGatewayProxyHandler = async (event) => {
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
};

export default handler;
