import {
    SearchClient,
    AzureKeyCredential
} from '@azure/search-documents';

const getAzureSearchUrl = () => {
    const url = process.env.AZURE_SEARCH_URL || 'https://your-default-url.search.azure.com'; // Use a default URL for testing or development
    if (!url) {
        throw new Error("AZURE_SEARCH_URL is not set");
    }
    return url;
};

const getAzureKeyCredential = () => {
    const key = process.env.AZURE_SEARCH_KEY || 'your-default-key'; // Use a default key for testing or development
    return new AzureKeyCredential(key);
};

const credential = getAzureKeyCredential();
const searchUrl = getAzureSearchUrl();

export const usersSearchClient = new SearchClient(
    process.env.AZURE_SEARCH_URL as string,
    'users',
    credential
)

export const notebooksSearchClient = new SearchClient(
    process.env.AZURE_SEARCH_URL as string,
    'notebooks',
    credential
)