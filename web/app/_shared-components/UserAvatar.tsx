import { Avatar } from "primereact/avatar";

export const UserAvatar = ({
  user,
}: {
  user: { firstName: string; lastName: string };
}) => {
  return (
    <Avatar
      label={`${user.firstName.at(0)}${user.lastName.at(0)}`}
      shape="circle"
      className="bg-gradient-to-br from-primary-500 to-primary-700 text-white cursor-pointer ring-2 ring-offset-2 ring-primary-200  transition-all"
    />
  );
};
