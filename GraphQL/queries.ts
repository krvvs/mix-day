export const CONTENT_BY_TAGS = ``;

export const FEATURED_CONTENT = `
query Mix_content($limit: Int, $offset: Int, $orderBy: [mix_content_order_by!], $where: mix_content_bool_exp) {
  mix_content(limit: 2, offset: 0, order_by:[{recommendorder : asc_nulls_last}], where: {isrecommend:{_eq:true}} ) {

    title
    abstractcontents
    updatedate
    authorname
    mix_content_tags {
      tag
    }
    imgurl
    id
  }
}`;

export const ORIGINAL_CONTENT = `
query Mix_content($limit: Int, $offset: Int, $orderBy: [mix_content_order_by!], $where: mix_content_bool_exp) {
  mix_content(limit: 8, offset: 0, order_by:[{updatetime : desc_nulls_last}], where: {isoriginal:{_eq:true}} ) {

    title
    abstractcontents
    updatedate
    authorname
    mix_content_tags {
      tag
    }
    imgurl
    offlineapplyurl
    id
  }
}`;

export const LATEST_CONTENT = `
query Mix_content($limit: Int, $offset: Int, $orderBy: [mix_content_order_by!]) {
  mix_content(limit: 30, offset: 0, order_by:[{updatetime : desc_nulls_last}] ) {

    title
    abstractcontents
    updatedate
    authorname
    mix_content_tags {
      tag
    }
    imgurl
    id
  }
}
`;
