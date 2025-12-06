"use server";

import { client } from "./prisma";

export type DatabaseFieldType = {
  verb: string;
  sentence: string;
  present?: Array<{
    id: string;
    germanPresentVerb: string;
    germanPresentSentence: string;
    audioUrlForPresent: string;
  }>;
  presentPerfect?: Array<{
    id: string;
    germanPresentPerfectVerb: string;
    germanPresentPerfectSentence: string;
    audioUrlForPresentPerfect: string;
  }>;
  past?: Array<{
    id: string;
    germanPastVerb: string;
    germanPastSentence: string;
    audioUrlForPast: string;
  }>;
  pastPerfect?: Array<{
    id: string;
    germanPastPerfectVerb: string;
    germanPastPerfectSentence: string;
    audioUrlForPastPerfect: string;
  }>;
  future?: Array<{
    id: string;
    germanFutureVerb: string;
    germanFutureSentence: string;
    audioUrlForFuture: string;
  }>;
  futurePerfect?: Array<{
    id: string;
    germanFuturePerfectVerb: string;
    germanFuturePerfectSentence: string;
    audioUrlForFuturePerfect: string;
  }>;
};


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

export const editFunction = async (verbId: string, data: DatabaseFieldType) => {
  try {
    // Check if the verb exists
    const verbExists = await client.verb.findUnique({
      where: {
        id: verbId,
      },
    });

    if (!verbExists) {
      return { status: 404, data: "Verb not found" };
    }

    // Perform the update operation
    const response = await client.verb.update({
      where: {
        id: verbId,
      },
      data: {
        englishVerb: data.verb,
        englishSentence: data.sentence,

        // Update Present relation
        present: {
          update:
            data.present?.map((item) => ({
              where: { id: item.id }, // Use the id of the related Present record
              data: {
                germanVerb: item.germanPresentVerb,
                germanSentence: item.germanPresentSentence,
                audio: item.audioUrlForPresent,
              },
            })) || [],
        },

        // Update PresentPerfect relation
        presentPerfect: {
          update:
            data.presentPerfect?.map((item) => ({
              where: { id: item.id }, // Use the id of the related PresentPerfect record
              data: {
                germanVerb: item.germanPresentPerfectVerb,
                germanSentence: item.germanPresentPerfectSentence,
                audio: item.audioUrlForPresentPerfect,
              },
            })) || [],
        },

        // Update Past relation
        past: {
          update:
            data.past?.map((item) => ({
              where: { id: item.id }, // Use the id of the related Past record
              data: {
                germanVerb: item.germanPastVerb,
                germanSentence: item.germanPastSentence,
                audio: item.audioUrlForPast,
              },
            })) || [],
        },

        // Update PastPerfect relation
        pastPerfect: {
          update:
            data.pastPerfect?.map((item) => ({
              where: { id: item.id }, // Use the id of the related PastPerfect record
              data: {
                germanVerb: item.germanPastPerfectVerb,
                germanSentence: item.germanPastPerfectSentence,
                audio: item.audioUrlForPastPerfect,
              },
            })) || [],
        },

        // Update Future relation
        future: {
          update:
            data.future?.map((item) => ({
              where: { id: item.id }, // Use the id of the related Future record
              data: {
                germanVerb: item.germanFutureVerb,
                germanSentence: item.germanFutureSentence,
                audio: item.audioUrlForFuture,
              },
            })) || [],
        },

        // Update FuturePerfect relation
        futurePerfect: {
          update:
            data.futurePerfect?.map((item) => ({
              where: { id: item.id }, // Use the id of the related FuturePerfect record
              data: {
                germanVerb: item.germanFuturePerfectVerb,
                germanSentence: item.germanFuturePerfectSentence,
                audio: item.audioUrlForFuturePerfect,
              },
            })) || [],
        },
      },
    });

    return { status: 200, data: response };
  } catch (error) {
    console.error(error, "editFunction error");
    return { status: 500, message: "Internal Server error" };
  }
};
