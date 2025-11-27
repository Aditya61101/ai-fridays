export const handleUploadAPI = async (files: File[]) => {
    console.log('Files uploaded:', files);
    // Handle file upload to your backend
    await new Promise((resolve) => setTimeout(resolve, 1000));
};