import React, { useState } from 'react';
import Image from 'next/image';
import { FileIcon, X } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { UploadButton } from "../../_lib/uploadthing";

type FileUploadProps = {
  apiEndpoint: "agencyLogo" | "subaccountLogo" | "media" | "avatar" | any;
  onChange: (url?: string) => void;
  value?: string;
};

const FileUpload: React.FC<FileUploadProps> = ({ apiEndpoint, onChange, value }) => {
  const [uploadedUrl, setUploadedUrl] = useState<string | undefined>(value);

 

  const handleRemove = () => {
    setUploadedUrl(undefined);
    onChange('');
  };

  const type = uploadedUrl?.split('.').pop();

  return (
    <div className="flex flex-col justify-center items-center">
      {uploadedUrl ? (
        <>
          {type !== 'pdf' ? (
            <div className="relative w-40 h-40">
              <Image src={uploadedUrl} alt="uploaded image" layout="fill" className="object-cover" />
            </div>
          ) : (
            <div className="relative flex items-center p-2 mt-2 rounded-md bg-background">
              <FileIcon />
              <a
                href={uploadedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
              >
                View PDF
              </a>
            </div>
          )}
          <Button
            onClick={handleRemove}
            variant="ghost"
            type="button"
          >
            <X className="h-4 w-4" />
            Remove Logo
          </Button>
        </>
      ) : (
        <div className="w-full bg-muted/30 p-4">
          <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res && res.length > 0) {
              const url = res[0].url;
              setUploadedUrl(url);
              onChange(url);
              toast.success("Upload Completed");
            }
          }}
          onUploadError={(error: Error) => {
  
            toast.error(`ERROR! ${error.message}`);
          }}
        />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
