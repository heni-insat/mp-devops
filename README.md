
# String Manipulation API Project

This project is a Node.js API for string manipulation with endpoints for reversing a string, converting it to uppercase, and counting vowels.

## Project Setup
- Docker and Docker Compose are used to set up SonarQube and other services.
- Includes CI/CD workflows via GitHub Actions.
- Snyk is used for vulnerability analysis.

## Endpoints
1. `/api/reverse` - Reverses a string.
2. `/api/uppercase` - Converts a string to uppercase.
3. `/api/count-vowels` - Counts the vowels in a string.

### Running the Project
Use Docker to start the application and services:

```bash
docker-compose up
```
