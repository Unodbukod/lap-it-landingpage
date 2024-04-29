"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";


interface UpdateContentFormProps {
  getId: () => string; // Define the type for the getId prop
}

const UpdateCardForm: React.FC<UpdateContentFormProps> = ({ getId }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [subtitle2, setSubtitle2] = useState("");
  const [price2, setPrice2] = useState<number>(0);
  const [packageone, setPackageone] = useState("");
  const [packagetwo, setPackagetwo] = useState("");
  const [packagethree, setPackagethree] = useState("");
  const [packagefour, setPackagefour] = useState("");
  const [packagefive, setPackagefive] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const id = getId(); // Get the ID dynamically

    try {
      const response = await fetch(
        `/api/landingpagecontent/pricingcontent/cards?id=${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            subtitle,
            price,
            subtitle2,
            price2,
            packageone,
            packagetwo,
            packagethree,
            packagefour,
            packagefive,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update content");
      }

      // Content updated successfully
      toast.success("Content updated successfully");
    } catch (error) {
      toast.error("Error updating content");
    }
  };

  const handleTitleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };
  const handleSubtitleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSubtitle(event.target.value);
  };
  const handlePriceChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setPrice(value);
    }
  };
  const handleSubtitle2Change = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSubtitle2(event.target.value);
  };
  const handlePrice2Change = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setPrice2(value);
    }
  };
  const handlePackageoneChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPackageone(event.target.value);
  };
  const handlePackagetwoChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPackagetwo(event.target.value);
  };
  const handlePackagethreeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPackagethree(event.target.value);
  };
  const handlePackagefourChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPackagefour(event.target.value);
  };
  const handlePackagefiveChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPackagefive(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* Add form tag and onSubmit handler */}
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="value" className="text-right">
            Title
          </Label>
          <Input
            id=""
            className="col-span-3"
            value={title}
            onChange={handleTitleChange} // Handle value input change
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="value" className="text-right">
            SubTitle
          </Label>
          <Input
            id=""
            className="col-span-3"
            value={subtitle}
            onChange={handleSubtitleChange} // Handle value input change
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="value" className="text-right">
            Price
          </Label>
          <Input
            id=""
            className="col-span-3"
            value={price}
            onChange={handlePriceChange} // Handle value input change
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="value" className="text-right">
            SubTitle
          </Label>
          <Input
            id=""
            className="col-span-3"
            value={subtitle2}
            onChange={handleSubtitle2Change} // Handle value input change
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="value" className="text-right">
            Price
          </Label>
          <Input
            id=""
            className="col-span-3"
            value={price2}
            onChange={handlePrice2Change} // Handle value input change
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="value" className="text-right">
            Content
          </Label>
          <Input
            id=""
            className="col-span-3"
            value={packageone}
            onChange={handlePackageoneChange} // Handle value input change
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="value" className="text-right">
            Content
          </Label>
          <Input
            id=""
            className="col-span-3"
            value={packagetwo}
            onChange={handlePackagetwoChange} // Handle value input change
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="value" className="text-right">
            Content
          </Label>
          <Input
            id=""
            className="col-span-3"
            value={packagethree}
            onChange={handlePackagethreeChange} // Handle value input change
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="value" className="text-right">
            Content
          </Label>
          <Input
            id=""
            className="col-span-3"
            value={packagefour}
            onChange={handlePackagefourChange} // Handle value input change
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="value" className="text-right">
            Content
          </Label>
          <Input
            id=""
            className="col-span-3"
            value={packagefive}
            onChange={handlePackagefiveChange} // Handle value input change
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose>
          <Button type="submit">Save</Button>{" "}
          {/* Move the onClick handler to the form's onSubmit */}
        </DialogClose>
      </DialogFooter>
    </form>
  );
};

export default UpdateCardForm;
