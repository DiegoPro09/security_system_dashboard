export const recordCacheKeys = {
    all:()=>['/records/all'],
    byId: (id: number) => ['/records/', id.toString()],
}