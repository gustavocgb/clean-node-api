import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']
    let errorResponse = null
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        errorResponse = badRequest(new MissingParamError(field))
      }
    }
    return errorResponse as HttpResponse
  }
}
