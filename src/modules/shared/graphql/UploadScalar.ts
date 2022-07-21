import { GraphQLScalarType, ValueNode } from 'graphql';

export type FileUpload = {
  createWriteStream: string;
  file: string;
};

function validate(fileupload: FileUpload) {
  return fileupload;
}

export const UploadScalar = new GraphQLScalarType({
  name: 'Upload',
  description: 'An File Upload Type',
  serialize: (value: FileUpload) => validate(value),
  parseValue: (value: FileUpload) => validate(value),
  parseLiteral: (ast: ValueNode & { value: FileUpload }) => validate(ast.value),
});
