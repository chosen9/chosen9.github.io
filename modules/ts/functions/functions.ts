function detectMobileDevice(): any {
    const toMatch: any = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem: any) => {
        return navigator.userAgent.match(toMatchItem);
    });
}