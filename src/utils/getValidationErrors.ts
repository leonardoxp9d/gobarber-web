/** 3.2.Iniciando front-end web - 1.Estrutura das páginas - Aula 09 - Exibindo erros no Input */

import { ValidationError } from 'yup';

interface Errors {
    [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
    const validationErrors: Errors = {};

    err.inner.forEach(error => { 
        if (error.path) {
          validationErrors[error.path] = error.message;
        }
      });
    
    return validationErrors;
}