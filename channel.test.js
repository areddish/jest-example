import {jest} from "@jest/globals";

const mockFirst = jest.fn();

// This needs to be before the import of channel below so it is
// mocked when the queue is created.
jest.mock("./discord", () => {
    return({
     ...jest.requireActual(),
     __esModule: true,
     default: jest.fn(),
     Collection: jest.fn().mockImplementation(() => ({
        first: () => mockFirst(),
        delete: jest.fn()
     }))
}) }); 

import * as channel from "./channel";

test("test 1", () => {
    mockFirst.mockReturnValue({guildId: 1})
    expect(channel.emptyQueue()).toBe(1); 
})
