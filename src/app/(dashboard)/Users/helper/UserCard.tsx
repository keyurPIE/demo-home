import { allUserProps } from "@/types/singleUserType";
import Image from "next/image";

interface UserCardProps {
  // setShowUserDetails: (value?: boolean) => void;
  handleSingleUserDisplay: (value: boolean, item: allUserProps) => void;
  allUsers: allUserProps[];
}

// const users = [
//   {
//     name: "Erin Lindford",
//     position: "Product Engineer",
//     profile: "/user-image-two.jpg",
//   },
//   {
//     name: "Erin Lindford",
//     position: "Product Engineer",
//     profile: "/user-image-two.jpg",
//   },
//   {
//     name: "Erin Lindford",
//     position: "Product Engineer",
//     profile: "/user-image-two.jpg",
//   },
//   {
//     name: "Erin Lindford",
//     position: "Product Engineer",
//     profile: "/user-image-two.jpg",
//   },
// ];

export default function UserCard({
  // setShowUserDetails,
  handleSingleUserDisplay,
  allUsers,
}: UserCardProps) {
  // console.log("allUsers**", allUsers);
  return (
    <div className="flex gap-4 flex-wrap">
      {/* {users.map((item, index) => ( */}
      {allUsers.map((item, index) => (
        <div
          className="flex flex-col border gap-2 py-8 md:p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-4 rounded-xl shadow-lg max-w-sm w-full"
          key={index}
        >
          <Image
            className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={item.profile}
            alt=""
            width={96}
            height={96}
          />
          <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg font-semibold text-black">{item.name}</p>
              <p className="font-medium text-gray-500">{item.position}</p>
            </div>
            <div className="flex gap-2 justify-center">
              <button
                className="text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-full px-4 py-1 border border-purple-200"
                // onClick={() => setShowUserDetails(true)}
                onClick={() => handleSingleUserDisplay(true, item)}
              >
                Read More
              </button>
              <button className="text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-full px-4 py-1 border border-purple-200">
                Message
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
