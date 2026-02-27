# nextjs-sst-template

Project template for Next.js + SST v4 (SSR via OpenNext on AWS).

## Bootstrap

From an empty directory:

```sh
curl -fsSL https://raw.githubusercontent.com/loxosceles/nextjs-sst-template/main/setup.sh | bash
```

The directory name becomes the project name. No cloning required.

## Repository Structure

```
├── setup.sh                         # Bootstrap script (entry point)
├── devcontainer-defaults.env.template  # Host config template
└── scaffold/                        # Project files (copied into new projects)
    ├── sst.config.ts
    ├── package.json
    ├── frontend/
    ├── .github/workflows/
    ├── docs/
    └── ...
```

`scaffold/` contains everything that becomes part of the instantiated project. Template-level files (this README, setup.sh, LICENSE) stay at the root and are not copied.

## Project Documentation

After bootstrapping, see the project's docs:

- [Architecture Overview](scaffold/docs/architecture/overview.md)
- [Local Development](scaffold/docs/guides/local-development.md)
- [Deployment](scaffold/docs/guides/deployment.md)
- [Commands Reference](scaffold/docs/reference/commands.md)
- [Environment Variables](scaffold/docs/reference/environment-variables.md)

## Security Recommendations

### For Production Deployment

1. **Content Security Policy (CSP)**: Add CSP headers in Next.js configuration
2. **IAM Policies**: Ensure least privilege IAM roles for AWS Lambda and other resources
3. **Security Headers**: Configure security headers in CloudFront distribution
4. **WAF Protection**: Consider adding Web Application Firewall for production
5. **CORS Configuration**: Implement proper CORS policies for API routes
6. **Environment Variables**: Never commit `.env` files with secrets; use AWS Parameter Store or Secrets Manager
7. **Dependency Security**: Regularly update dependencies and audit for vulnerabilities
8. **Lambda Security**: Configure appropriate Lambda execution roles and memory/timeout limits
9. **API Gateway Security**: Enable API Gateway logging, monitoring, and request validation
10. **Database Security**: If using databases, implement proper access controls and encryption

### SST-Specific Security
- Review SST-generated IAM policies and customize as needed
- Enable CloudFront and API Gateway logging
- Consider adding rate limiting for API endpoints
- Use AWS WAF for additional security layers
- Monitor Lambda function execution and error rates
- Secure environment variables using SST's built-in secret management
