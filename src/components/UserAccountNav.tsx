import type { User } from 'next-auth';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface UserAccountNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>;
}

const UserAccountNav: React.FC<UserAccountNavProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger></DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild></DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={event => {
            event.preventDefault();
            signOut().catch(console.error);
          }}
        ></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
