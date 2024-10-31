import Laboratory from "@/components/Laboratory";
import Library from "@/components/Library";
import Transport from "@/components/Transport";

function ServicesPage() {
  return (
    <div className="flex flex-col items-center space-y-24">
      <div className="w-full ">
        <Transport />
      </div>
      <div className="w-full border-t-2 border-gray-400"></div>
      <div className="w-full ">
        <Library />
      </div>
      <div className="w-full border-t-2 border-gray-400"></div>

      <div className="w-full ">
        <Laboratory />
      </div>
    </div>
  );
}
export default ServicesPage;
