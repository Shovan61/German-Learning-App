"use server";

import { FieldType } from "@/components/main";
import { client } from "./prisma";

export const deleteFunction = async (verbId: string) => {
  try {
    const response = await client.verb.delete({
      where: {
        id: verbId,
      },
    });

    if (response) {
      return { status: 200, data: response };
    } else {
      return { status: 404, data: "Failed to delete" };
    }
  } catch (error) {
    console.log(error, "deleteFunction error");
    return { status: 500, message: "Internal Server error" };
  }
};

export const editFunction = async (
  verbId: string,
  data: FieldType,
  code: string
) => {
  try {
    if (code !== "9272") {
      return { status: 404, data: "Code not matched" };
    }

    const response = await client.verb.update({
      where: {
        id: verbId,
      },
      data: { ...data },
    });

    if (response) {
      return { status: 200, data: response };
    } else {
      return { status: 404, data: "Failed to delete" };
    }
  } catch (error) {
    console.log(error, "deleteFunction error");
    return { status: 500, message: "Internal Server error" };
  }
};
