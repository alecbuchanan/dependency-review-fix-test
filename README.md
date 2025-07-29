# Test Project for Dependency Review Action

This test project is designed to validate the vulnerability table duplication fix for the GitHub Actions dependency review action.

## Project Structure

This project contains multiple manifest files with known vulnerable dependencies:

### JavaScript/Node.js Dependencies (package.json)
- **lodash@4.17.19** - Known vulnerabilities in older versions
- **express@4.17.1** - Potential security issues in older versions  
- **minimist@1.2.5** - Prototype pollution vulnerability
- **axios@0.21.0** - Known vulnerabilities in this version
- **jest@26.0.0** - Development dependency with potential issues

### Python Dependencies (requirements.txt)
- **django@2.2.0** - Security vulnerabilities in older Django versions
- **requests@2.20.0** - Known security issues
- **pyyaml@3.13** - YAML parsing vulnerabilities  
- **jinja2@2.10** - Template injection vulnerabilities
- **flask@1.0.0** - Security issues in older Flask versions
- **cryptography@2.6.1** - Cryptographic vulnerabilities
- **pillow@6.2.0** - Image processing vulnerabilities

## Testing the Fix

This project is specifically designed to test that:

1. **Separate Tables**: The dependency review action creates separate vulnerability tables for `package.json` and `requirements.txt`
2. **No Duplication**: Vulnerabilities from `package.json` do not appear in the `requirements.txt` table and vice versa
3. **Proper Grouping**: Multiple vulnerabilities for the same package are properly grouped within each manifest's table
4. **Manifest Headers**: Each table has the correct manifest file header (e.g., `<em>package.json</em>`, `<em>requirements.txt</em>`)

## How to Test

1. Create a pull request with changes to these dependency files
2. The GitHub Action will run and generate a dependency review summary  
3. Verify that the summary contains separate tables for each manifest
4. Confirm that vulnerabilities are not duplicated across tables

## Expected Behavior

Before the fix:
- Vulnerabilities would accumulate across manifests
- The second table (requirements.txt) would contain vulnerabilities from both manifests

After the fix:
- Each manifest gets its own clean vulnerability table
- No cross-contamination of vulnerability data between manifests
