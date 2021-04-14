// //--------------------------example 1
// function padLeft(value: string, padding: any) {
//     if (typeof padding === "number") {
//       return Array(padding + 1).join(" ") + value;
//     }
//     if (typeof padding === "string") {
//       return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${typeof padding}'.`);
//   }
var handleArtistsResponse = function (response) {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
};
