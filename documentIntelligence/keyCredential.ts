import { AzureKeyCredential } from "@azure/ai-form-recognizer";

const getDocumentIntelligenceKeyCredential = () => {
    const key = process.env.NEXT_PUBLIC_DOCUMENT_INTELLIGENCE_KEY || 'your-default-key'; // Use a default key for testing or development
    return new AzureKeyCredential(key);
};

const documentIntelligenceKeyCredential = getDocumentIntelligenceKeyCredential();

export default documentIntelligenceKeyCredential;