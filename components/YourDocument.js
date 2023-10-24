import { useVeltClient, VeltCommentTool, VeltPresence, VeltHuddleTool,VeltHuddle } from "@veltdev/react";
import { useEffect } from "react";
import YourAuthComponent from "./YourAuthComponent";

export default function YourDocument() {
  // Get the Velt client
  const { client } = useVeltClient();

  useEffect(() => {
    if (client) {
      // Set a document ID
      client.setDocumentId("unique-document-id");
    }
  }, [client]);

  return (
    <div className="bg-[#0f1116] text-white  w-screen h-screen border-red-400 items-end">
      <div className="flex justify-between m-auto w-[400px] py-10 pt-[30vh]">
        <div>
          <YourAuthComponent/>
        </div>
        <div>
          <VeltCommentTool />
        </div>
        
        <div>
          <VeltHuddleTool/>
        </div>
        <div>
          <VeltPresence flockMode={true}/>
        </div>
      </div>

      <div className="m-auto flex justify-center bg-[#4e4e4e] w-[400px] rounded">
        <div>
          <h2 className="text-2xl font-bold m-2">Highlight this text to add a comment!</h2>
          <p className="m-2">Or tap the comment icon and get started</p>
        </div>
      </div>
    </div>
  );
}
