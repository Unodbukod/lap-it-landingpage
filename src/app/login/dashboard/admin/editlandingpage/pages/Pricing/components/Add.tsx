import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Add = () => {
  const [title, setTitle] = useState("");
  const [standard, setStandard] = useState("");
  const [premium, setPremium] = useState("");
  const [starter, setStarter] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a JSON object with the form data
    const newItem = {
      title,
      standard,
      premium,
      starter,
    };

    try {
      const response = await fetch(
        "/api/landingpagecontent/pricingcontent/table",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add item");
      }
      toast.success("Item added successfully");
    } catch (error) {
      toast.error("Error adding item");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-green-500 text-slate-950">
            ADD
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Title
                </Label>
                <Input
                  id="name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-[280px]"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="standard" className="text-right">
                  Standard
                </Label>
                <select
                  value={standard}
                  onChange={(e) => setStandard(e.target.value)}
                  className="w-[280px]"
                >
                  <option>Select a mark</option>

                  <option value="crossmark">Cross mark</option>
                  <option value="checkmark">Check mark</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Premium
                </Label>
                <select
                  value={premium}
                  onChange={(e) => setPremium(e.target.value)}
                  className="w-[280px]"
                >
                  <option>Select a mark</option>
                  <option value="crossmark">Cross mark</option>
                  <option value="checkmark">Check mark</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Starter
                </Label>
                <select
                  value={starter}
                  onChange={(e) => setStarter(e.target.value)}
                  className="w-[280px]"
                >
                  <option>Select a mark</option>

                  <option value="crossmark">Cross mark</option>

                  <option value="checkmark">Check mark</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Add;
