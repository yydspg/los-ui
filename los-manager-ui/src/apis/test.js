import testDemo from "@/http/httpReq.js";

export async function getTestData () {
    return testDemo({
        url: 'test1',
    })
}