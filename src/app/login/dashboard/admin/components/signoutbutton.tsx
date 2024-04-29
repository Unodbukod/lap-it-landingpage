"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const SignoutButton = () => {
    const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/login/signin")
      toast.success("Logout Successfully")
    } catch (error) {
      // Handle sign-out error
      toast.error("Sign-out failed");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-white text-black hover:bg-indigo-600 hover:text-white">
          Sign Out
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will log out your account.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={handleSignOut}
            className="bg-red-500"
          >Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignoutButton;