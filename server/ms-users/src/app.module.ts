import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'pg-2ccdd4ab-galileo.f.aivencloud.com',
      port: 25064,
      username: 'avnadmin',
      password: 'AVNS_hAtWYDDu2EbTKINbwGs',
      database: 'defaultdb',
      entities: [User],
      synchronize: true,
      ssl: {
        rejectUnauthorized: true,
        ca:`-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUK4XpJjDZWJ9NX4wggrMxEmGPgjowDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvOTNhNjFmZDUtOGE5OS00Y2YzLTg3OTAtODQ4YzE4Njgw
ZDJhIFByb2plY3QgQ0EwHhcNMjQxMTExMjEwMzQ0WhcNMzQxMTA5MjEwMzQ0WjA6
MTgwNgYDVQQDDC85M2E2MWZkNS04YTk5LTRjZjMtODc5MC04NDhjMTg2ODBkMmEg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAKZsIr3t
sR4vdvMsmBWsXMmwKkHd7mRwCiZrUerPkbaNAaNrvhw8hOPk2eKsLnw6lNkfNxL+
PWX2k+6GU9lS58HJiQScxbhWhJixZQlyLXHLVgeGA8vhnyuMxOTF5/nZJggoBX8J
k8LeVuQ911aSMPrkwJj5bD3N0KwdRKxQa3SFc7fDFNcJ/GBZ6kmefl9HhQqAd95l
gT85c8c8F9Qei075KqTGk0ZUKKxqfM6Jz0ZE1VEdt19eMm5HfTt/McnZViP1DoiS
S+ra7DIzskXGYw/hLDxwWYLz4bRRgdklM5ecnTCg49BFJCGXQBFMDCk8Kn6JaWSY
mgNifP/bDtJSaMCVQa3C66kT7vc9BH8EKkGYnDvydS/VdbibjMWOB3UJyew9iDj7
sqcPiASDjO46tq7klFq0X/iPjpPVM2FZpLeGDOPtwZZcTIuq9J3RIL2ZZTWm5paZ
Um3aUc4EJZMImYtFg24B0uJGovSQjW6x9Sth4Vx0Z0+tf8YT2185FpWEVwIDAQAB
oz8wPTAdBgNVHQ4EFgQUqHHDnuy2/dTUQFFlgftA4Yo6uYMwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAH0YGAGVl0tzzsmm
pQWtLFpe5aIGiZqnCojYfKIKxd3wYryav3NxjMD9z66EI9ZagML1G5LSMi9FU3rH
CmQLvQ1YA+iwrpjEGdNoYrOdUjH8ZzS4a49+GiWS95fQZRW4RXxcgFbCGX0d2Xxe
yaVSvYBBuBZOZMYhNG5QAN4eFbMsFTJP8b+PghR+B82juteTmuAZ+IH1f2HqhmjO
yW8mscHFSasYI/+aztl8QOd2LbgmDxfcMTe0Fy6NkGjGMjJF/YcQuurmmyIZzwjd
Zlj+XGAdPCwvBBVMe6TEE1bNpq/BK+pv9qzB5mZs3K51XxRBI+v6eSB3kXH4+lfP
A+KaoilJ4L1Sc+s+z+ytzLRlqkYg9oKI35GiVs4qVMw4FlZG5/PZIce9SZQe67vv
fwgWr6bsitlDyusOUcanArspgu2FSDJJgisrYONOTHa6eleWSV9bS0c4FZmDmst1
ekWHEotjj6HNDQDF6zA7SMFDMJLtZKAeAroMINB4ZoBNoLP9dQ==
-----END CERTIFICATE-----`,
      },
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Generación automática del esquema
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
