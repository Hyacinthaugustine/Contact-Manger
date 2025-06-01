import { faker } from "@faker-js/faker";

const randomName = faker.person.fullName();
const avatar = faker.image.avatar();

const ProfileDetails = () => {
  return (
    <div className="flex gap-0 items-center flex-col">
      <img
        src={avatar}
        alt={`${randomName} image`}
        className="size-14 rounded-full  border-2 "
      />
      <h2 className="font-Merriweather font-semibold text-gray-900">
        {randomName}
      </h2>
    </div>
  );
};

export default ProfileDetails;
