import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MigrationModule } from './modules/migration/migration.module';
import { ToursModule } from './modules/tours/tours.module';

const environmentImport = ConfigModule.forRoot();

const MongooseConnectionImport = MongooseModule.forRoot(
  `mongodb+srv://${process.env.MongoDbUser}:${process.env.MongoDbPass}@cluster0.xyqdo.mongodb.net/${process.env.MongoDbName}?retryWrites=true&w=majority`,
);

const graphQLModuleImport = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  debug: false,
  playground: true,
  autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
  sortSchema: true,
});

@Module({
  imports: [
    environmentImport,
    MongooseConnectionImport,
    ToursModule,
    MigrationModule,
    graphQLModuleImport,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
