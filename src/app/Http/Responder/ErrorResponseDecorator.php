<?php


namespace App\Http\Responder;

use Flugg\Responder\Http\Responses\Decorators\ResponseDecorator;
use Illuminate\Http\JsonResponse;

final class ErrorResponseDecorator extends ResponseDecorator
{
    /**
     * Generate a JSON response.
     *
     * @param  array $data
     * @param  int   $status
     * @param  array $headers
     * @return \Illuminate\Http\JsonResponse
     */
    public function make(array $data, int $status, array $headers = []): JsonResponse
    {
        return $this->factory->make(array_merge([
            'error' => [],
        ], $data), $status, $headers);
    }
}

