import { Module } from '@nestjs/common';
import { CursosModule } from './cursos/cursos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './cursos/entities/curso.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'pg-1febce65-alumnos-c0a9.f.aivencloud.com',
      port: 26339,
      username: 'avnadmin',
      password: 'AVNS_-AF55uqg07dv5Seo-WM',
      database: 'defaultdb',
      entities: [Curso],
      synchronize: true,
      ssl: {
        rejectUnauthorized: true,
        ca:`-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUXXLnoqkt6JMZN7BdB22bCEECfMMwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvNDI0ZjI4NDktMjRmNS00MDAyLWI5ZGYtYWVkNzU0OTlk
OTcxIFByb2plY3QgQ0EwHhcNMjQxMjA5MTYzMDU0WhcNMzQxMjA3MTYzMDU0WjA6
MTgwNgYDVQQDDC80MjRmMjg0OS0yNGY1LTQwMDItYjlkZi1hZWQ3NTQ5OWQ5NzEg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAM+LKqIO
ZJbKmAERMtgwTH0l9tvZZEqoLB5cfcWBps8ixpx2i7beebzDJ2A+jDKLzo3l8E6x
FH+sBApRg4XKS5qBHuW+9lwltlrLdSeQlpJPsbxq2+Wd5kpUFjYj8II4S7h+0Vlf
qnpZ98wEVTG33xSjh7mx9PCiTapPsFczKE2DDpCVy2u7a9btLLGviWmFvTSI+F2i
CR0WJnUSiKKaO6NusgmF5+XtZrwmv81TnoIt7ASN0AWO9qjg1wOEZ46z4YJgbiIR
dq5tS2tMGu+aEOq1XQ41QsFmgRRPoe3SlGYW5aPRpkXPEvF4/Jk0mdnjLjGGBN1v
zA22d1Mg68zUxl/HYOIe3eRLPNdR/ZWOa2QpZH0PDBK5va29njdbAr7qzL2TCMyV
hDRkkqu+WVmuokYuR9TkGL9s2OTNmfpDrhExIyNJM25oUDYlowLCA3mO6mIypLq+
sSEBLVAWzZYXo43myglmejY3aje7tYfFBRbil4gWxVBRMovfpKDV1D00SQIDAQAB
oz8wPTAdBgNVHQ4EFgQUpxa7pk4Faa7qFxyPVR8yAAGhDicwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAImMC0mW2PRnBoOR
eBU4fCLbZXYsDlaaoIz36ZQS/cpegkyMQSfMSxwYX2ZuFidKm5i1CMGidBKcisRZ
/D7hM7VBgqyP4tWGxvy+ReT8Z01FCzgfPyPrm16/uF35TtT2VMC+igJcopOKnr3y
vDy+elNjvCexkXwA7aqw0wzvUHOKCvOhKTqroDyT+rVgNnkk1ajCOLFDL7U3EEDP
g46yCB3XlRZINtqM6aAKcO30OqFKZ9l5ZveIDztKfdYonnq532gmPeVPZhyidZO4
rFULhIVONoU/YAT4u/16a6ZFahIS+TNMlhyzxSbf4NgdXHzP7tUakzeSY8L2lk/R
pDEHhhwYuXXVFmf1KMKkTI1h6edJoPDyQyhch87aCwmwODJsIEVVt+mY5pMP7rny
3fzJ8i4j6cmt0nMo2Hh+3t6vPeuVtIPNw+bazYVOOcs1sFeFcB/l+kE05NjUFW0w
3TX7rtDkZRAgk9eZImVvzmfZn55ZeQ1Wp/4LzgN2YozlFCSEeQ==
-----END CERTIFICATE-----`,
      },
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Generación automática del esquema
    }),
    CursosModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
