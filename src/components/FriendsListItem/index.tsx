import { UserAvatarIcon } from "@/icons";
import Image from "next/image";

export function FriendsListItem() {
  return (
    <div className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {/* <Image
            className="w-10 h-10 rounded"
            src="/docs/images/people/profile-picture-5.jpg"
            alt="Default avatar"
            width={30}
            height={30}
          /> */}
          <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded dark:bg-gray-600">
            <UserAvatarIcon />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            Neil Sims
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            email@windster.com
          </p>
        </div>
        {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          $320
        </div> */}
      </div>
    </div>
  );
}
