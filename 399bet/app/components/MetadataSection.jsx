import MetadataCard from "./MetadataCard";

const MetadataSection = () => {
  const metadata = [
    { icon: "id-card", label: "Name", value: "399bet" },
    { icon: "code", label: "Version", value: "V1.1" },
    { icon: "expand", label: "Size", value: "6.7 MB" },
    { icon: "folder", label: "Available", value: "Android / iOS & Web" },
    { icon: "user-tie", label: "Developer", value: "399betgame.cc" },
  ];

  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {metadata.map((item, index) => (
          <MetadataCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MetadataSection;
