export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  abstractcontents?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  mix_content?: Maybe<Mix_Content>;
  title: Scalars['String']['output'];
};

export type Session = {
  __typename?: 'Session';
  id: Scalars['String']['output'];
  me?: Maybe<Mix_User>;
  userId: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "mix_content" */
export type Mix_Content = {
  __typename?: 'mix_content';
  abstractcontents?: Maybe<Scalars['String']['output']>;
  author: Scalars['String']['output'];
  authorname: Scalars['String']['output'];
  /** A computed field, executes function "content_bookmarked" */
  bookmarked?: Maybe<Scalars['Boolean']['output']>;
  category?: Maybe<Mix_Content_Category_Enum>;
  contentid: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  imgurl?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "mix_content_is_original" */
  isoriginal?: Maybe<Scalars['Boolean']['output']>;
  /** A computed field, executes function "mix_content_is_recommend" */
  isrecommend?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  mix_content_recommends: Array<Mix_Content_Recommend>;
  /** An array relationship */
  mix_content_tags: Array<Mix_Content_Tag>;
  /** An object relationship */
  mix_source_info: Mix_Source_Info;
  offlineapplyurl?: Maybe<Scalars['String']['output']>;
  offlinetime?: Maybe<Scalars['timestamp']['output']>;
  originalurl?: Maybe<Scalars['String']['output']>;
  pdfpagecount?: Maybe<Scalars['Int']['output']>;
  pdfurl?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "content_read" */
  read?: Maybe<Scalars['Boolean']['output']>;
  readtime: Scalars['Int']['output'];
  recommendorder?: Maybe<Scalars['Int']['output']>;
  redirecturl?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "mix_content_released" */
  released?: Maybe<Scalars['Boolean']['output']>;
  reviewer?: Maybe<Scalars['uuid']['output']>;
  reviewtime?: Maybe<Scalars['timestamp']['output']>;
  source: Scalars['String']['output'];
  status: Mix_Content_Status_Enum;
  title: Scalars['String']['output'];
  /** A computed field, executes function "content_updatedate" */
  updatedate?: Maybe<Scalars['String']['output']>;
  updatetime: Scalars['timestamp']['output'];
};


/** columns and relationships of "mix_content" */
export type Mix_ContentMix_Content_RecommendsArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Recommend_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Recommend_Order_By>>;
  where?: InputMaybe<Mix_Content_Recommend_Bool_Exp>;
};


/** columns and relationships of "mix_content" */
export type Mix_ContentMix_Content_TagsArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Tag_Order_By>>;
  where?: InputMaybe<Mix_Content_Tag_Bool_Exp>;
};

/** order by aggregate values of table "mix_content" */
export type Mix_Content_Aggregate_Order_By = {
  avg?: InputMaybe<Mix_Content_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Mix_Content_Max_Order_By>;
  min?: InputMaybe<Mix_Content_Min_Order_By>;
  stddev?: InputMaybe<Mix_Content_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Mix_Content_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Mix_Content_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Mix_Content_Sum_Order_By>;
  var_pop?: InputMaybe<Mix_Content_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Mix_Content_Var_Samp_Order_By>;
  variance?: InputMaybe<Mix_Content_Variance_Order_By>;
};

/** order by avg() on columns of table "mix_content" */
export type Mix_Content_Avg_Order_By = {
  pdfpagecount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  readtime?: InputMaybe<Order_By>;
  recommendorder?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "mix_content". All fields are combined with a logical 'AND'. */
export type Mix_Content_Bool_Exp = {
  _and?: InputMaybe<Array<Mix_Content_Bool_Exp>>;
  _not?: InputMaybe<Mix_Content_Bool_Exp>;
  _or?: InputMaybe<Array<Mix_Content_Bool_Exp>>;
  abstractcontents?: InputMaybe<String_Comparison_Exp>;
  author?: InputMaybe<String_Comparison_Exp>;
  authorname?: InputMaybe<String_Comparison_Exp>;
  bookmarked?: InputMaybe<Boolean_Comparison_Exp>;
  category?: InputMaybe<Mix_Content_Category_Enum_Comparison_Exp>;
  contentid?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imgurl?: InputMaybe<String_Comparison_Exp>;
  isoriginal?: InputMaybe<Boolean_Comparison_Exp>;
  isrecommend?: InputMaybe<Boolean_Comparison_Exp>;
  mix_content_recommends?: InputMaybe<Mix_Content_Recommend_Bool_Exp>;
  mix_content_tags?: InputMaybe<Mix_Content_Tag_Bool_Exp>;
  mix_source_info?: InputMaybe<Mix_Source_Info_Bool_Exp>;
  offlineapplyurl?: InputMaybe<String_Comparison_Exp>;
  offlinetime?: InputMaybe<Timestamp_Comparison_Exp>;
  originalurl?: InputMaybe<String_Comparison_Exp>;
  pdfpagecount?: InputMaybe<Int_Comparison_Exp>;
  pdfurl?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  read?: InputMaybe<Boolean_Comparison_Exp>;
  readtime?: InputMaybe<Int_Comparison_Exp>;
  recommendorder?: InputMaybe<Int_Comparison_Exp>;
  redirecturl?: InputMaybe<String_Comparison_Exp>;
  released?: InputMaybe<Boolean_Comparison_Exp>;
  reviewer?: InputMaybe<Uuid_Comparison_Exp>;
  reviewtime?: InputMaybe<Timestamp_Comparison_Exp>;
  source?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Mix_Content_Status_Enum_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedate?: InputMaybe<String_Comparison_Exp>;
  updatetime?: InputMaybe<Timestamp_Comparison_Exp>;
};

export enum Mix_Content_Category_Enum {
  /** 믹스 앰배서더 */
  Ambassador = 'Ambassador',
  /** CMO 인터뷰 */
  Cmo = 'CMO',
  /** 오프라인 세션 */
  Offline = 'Offline',
  /** 리포트 발행 */
  Report = 'Report'
}

/** Boolean expression to compare columns of type "mix_content_category_enum". All fields are combined with logical 'AND'. */
export type Mix_Content_Category_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Mix_Content_Category_Enum>;
  _in?: InputMaybe<Array<Mix_Content_Category_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Mix_Content_Category_Enum>;
  _nin?: InputMaybe<Array<Mix_Content_Category_Enum>>;
};

/** columns and relationships of "mix_content_daily_selected" */
export type Mix_Content_Daily_Selected = {
  __typename?: 'mix_content_daily_selected';
  contentid: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  ordernum: Scalars['Int']['output'];
  published: Scalars['Boolean']['output'];
  updatetime: Scalars['timestamp']['output'];
};

/** Boolean expression to filter rows from the table "mix_content_daily_selected". All fields are combined with a logical 'AND'. */
export type Mix_Content_Daily_Selected_Bool_Exp = {
  _and?: InputMaybe<Array<Mix_Content_Daily_Selected_Bool_Exp>>;
  _not?: InputMaybe<Mix_Content_Daily_Selected_Bool_Exp>;
  _or?: InputMaybe<Array<Mix_Content_Daily_Selected_Bool_Exp>>;
  contentid?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ordernum?: InputMaybe<Int_Comparison_Exp>;
  published?: InputMaybe<Boolean_Comparison_Exp>;
  updatetime?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** Ordering options when selecting data from "mix_content_daily_selected". */
export type Mix_Content_Daily_Selected_Order_By = {
  contentid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ordernum?: InputMaybe<Order_By>;
  published?: InputMaybe<Order_By>;
  updatetime?: InputMaybe<Order_By>;
};

/** select columns of table "mix_content_daily_selected" */
export enum Mix_Content_Daily_Selected_Select_Column {
  /** column name */
  Contentid = 'contentid',
  /** column name */
  Id = 'id',
  /** column name */
  Ordernum = 'ordernum',
  /** column name */
  Published = 'published',
  /** column name */
  Updatetime = 'updatetime'
}

/** Streaming cursor of the table "mix_content_daily_selected" */
export type Mix_Content_Daily_Selected_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mix_Content_Daily_Selected_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mix_Content_Daily_Selected_Stream_Cursor_Value_Input = {
  contentid?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ordernum?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  updatetime?: InputMaybe<Scalars['timestamp']['input']>;
};

/** order by max() on columns of table "mix_content" */
export type Mix_Content_Max_Order_By = {
  abstractcontents?: InputMaybe<Order_By>;
  author?: InputMaybe<Order_By>;
  authorname?: InputMaybe<Order_By>;
  contentid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imgurl?: InputMaybe<Order_By>;
  offlineapplyurl?: InputMaybe<Order_By>;
  offlinetime?: InputMaybe<Order_By>;
  originalurl?: InputMaybe<Order_By>;
  pdfpagecount?: InputMaybe<Order_By>;
  pdfurl?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  readtime?: InputMaybe<Order_By>;
  recommendorder?: InputMaybe<Order_By>;
  redirecturl?: InputMaybe<Order_By>;
  reviewer?: InputMaybe<Order_By>;
  reviewtime?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatetime?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "mix_content" */
export type Mix_Content_Min_Order_By = {
  abstractcontents?: InputMaybe<Order_By>;
  author?: InputMaybe<Order_By>;
  authorname?: InputMaybe<Order_By>;
  contentid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imgurl?: InputMaybe<Order_By>;
  offlineapplyurl?: InputMaybe<Order_By>;
  offlinetime?: InputMaybe<Order_By>;
  originalurl?: InputMaybe<Order_By>;
  pdfpagecount?: InputMaybe<Order_By>;
  pdfurl?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  readtime?: InputMaybe<Order_By>;
  recommendorder?: InputMaybe<Order_By>;
  redirecturl?: InputMaybe<Order_By>;
  reviewer?: InputMaybe<Order_By>;
  reviewtime?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatetime?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "mix_content". */
export type Mix_Content_Order_By = {
  abstractcontents?: InputMaybe<Order_By>;
  author?: InputMaybe<Order_By>;
  authorname?: InputMaybe<Order_By>;
  bookmarked?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  contentid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imgurl?: InputMaybe<Order_By>;
  isoriginal?: InputMaybe<Order_By>;
  isrecommend?: InputMaybe<Order_By>;
  mix_content_recommends_aggregate?: InputMaybe<Mix_Content_Recommend_Aggregate_Order_By>;
  mix_content_tags_aggregate?: InputMaybe<Mix_Content_Tag_Aggregate_Order_By>;
  mix_source_info?: InputMaybe<Mix_Source_Info_Order_By>;
  offlineapplyurl?: InputMaybe<Order_By>;
  offlinetime?: InputMaybe<Order_By>;
  originalurl?: InputMaybe<Order_By>;
  pdfpagecount?: InputMaybe<Order_By>;
  pdfurl?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  read?: InputMaybe<Order_By>;
  readtime?: InputMaybe<Order_By>;
  recommendorder?: InputMaybe<Order_By>;
  redirecturl?: InputMaybe<Order_By>;
  released?: InputMaybe<Order_By>;
  reviewer?: InputMaybe<Order_By>;
  reviewtime?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedate?: InputMaybe<Order_By>;
  updatetime?: InputMaybe<Order_By>;
};

/** columns and relationships of "mix_content_recommend" */
export type Mix_Content_Recommend = {
  __typename?: 'mix_content_recommend';
  contentid: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  mix_content: Mix_Content;
  priority: Scalars['Int']['output'];
  published: Scalars['Boolean']['output'];
  updatedate: Scalars['date']['output'];
};

/** order by aggregate values of table "mix_content_recommend" */
export type Mix_Content_Recommend_Aggregate_Order_By = {
  avg?: InputMaybe<Mix_Content_Recommend_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Mix_Content_Recommend_Max_Order_By>;
  min?: InputMaybe<Mix_Content_Recommend_Min_Order_By>;
  stddev?: InputMaybe<Mix_Content_Recommend_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Mix_Content_Recommend_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Mix_Content_Recommend_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Mix_Content_Recommend_Sum_Order_By>;
  var_pop?: InputMaybe<Mix_Content_Recommend_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Mix_Content_Recommend_Var_Samp_Order_By>;
  variance?: InputMaybe<Mix_Content_Recommend_Variance_Order_By>;
};

/** order by avg() on columns of table "mix_content_recommend" */
export type Mix_Content_Recommend_Avg_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "mix_content_recommend". All fields are combined with a logical 'AND'. */
export type Mix_Content_Recommend_Bool_Exp = {
  _and?: InputMaybe<Array<Mix_Content_Recommend_Bool_Exp>>;
  _not?: InputMaybe<Mix_Content_Recommend_Bool_Exp>;
  _or?: InputMaybe<Array<Mix_Content_Recommend_Bool_Exp>>;
  contentid?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  mix_content?: InputMaybe<Mix_Content_Bool_Exp>;
  priority?: InputMaybe<Int_Comparison_Exp>;
  published?: InputMaybe<Boolean_Comparison_Exp>;
  updatedate?: InputMaybe<Date_Comparison_Exp>;
};

/** order by max() on columns of table "mix_content_recommend" */
export type Mix_Content_Recommend_Max_Order_By = {
  contentid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  updatedate?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "mix_content_recommend" */
export type Mix_Content_Recommend_Min_Order_By = {
  contentid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  updatedate?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "mix_content_recommend". */
export type Mix_Content_Recommend_Order_By = {
  contentid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mix_content?: InputMaybe<Mix_Content_Order_By>;
  priority?: InputMaybe<Order_By>;
  published?: InputMaybe<Order_By>;
  updatedate?: InputMaybe<Order_By>;
};

/** select columns of table "mix_content_recommend" */
export enum Mix_Content_Recommend_Select_Column {
  /** column name */
  Contentid = 'contentid',
  /** column name */
  Id = 'id',
  /** column name */
  Priority = 'priority',
  /** column name */
  Published = 'published',
  /** column name */
  Updatedate = 'updatedate'
}

/** order by stddev() on columns of table "mix_content_recommend" */
export type Mix_Content_Recommend_Stddev_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "mix_content_recommend" */
export type Mix_Content_Recommend_Stddev_Pop_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "mix_content_recommend" */
export type Mix_Content_Recommend_Stddev_Samp_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "mix_content_recommend" */
export type Mix_Content_Recommend_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mix_Content_Recommend_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mix_Content_Recommend_Stream_Cursor_Value_Input = {
  contentid?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  updatedate?: InputMaybe<Scalars['date']['input']>;
};

/** order by sum() on columns of table "mix_content_recommend" */
export type Mix_Content_Recommend_Sum_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "mix_content_recommend" */
export type Mix_Content_Recommend_Var_Pop_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "mix_content_recommend" */
export type Mix_Content_Recommend_Var_Samp_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "mix_content_recommend" */
export type Mix_Content_Recommend_Variance_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** select columns of table "mix_content" */
export enum Mix_Content_Select_Column {
  /** column name */
  Abstractcontents = 'abstractcontents',
  /** column name */
  Author = 'author',
  /** column name */
  Authorname = 'authorname',
  /** column name */
  Category = 'category',
  /** column name */
  Contentid = 'contentid',
  /** column name */
  Id = 'id',
  /** column name */
  Imgurl = 'imgurl',
  /** column name */
  Offlineapplyurl = 'offlineapplyurl',
  /** column name */
  Offlinetime = 'offlinetime',
  /** column name */
  Originalurl = 'originalurl',
  /** column name */
  Pdfpagecount = 'pdfpagecount',
  /** column name */
  Pdfurl = 'pdfurl',
  /** column name */
  Price = 'price',
  /** column name */
  Readtime = 'readtime',
  /** column name */
  Recommendorder = 'recommendorder',
  /** column name */
  Redirecturl = 'redirecturl',
  /** column name */
  Reviewer = 'reviewer',
  /** column name */
  Reviewtime = 'reviewtime',
  /** column name */
  Source = 'source',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  Updatetime = 'updatetime'
}

export enum Mix_Content_Status_Enum {
  Crawled = 'crawled',
  Published = 'published',
  Rejected = 'rejected',
  Scheduled = 'scheduled'
}

/** Boolean expression to compare columns of type "mix_content_status_enum". All fields are combined with logical 'AND'. */
export type Mix_Content_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Mix_Content_Status_Enum>;
  _in?: InputMaybe<Array<Mix_Content_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Mix_Content_Status_Enum>;
  _nin?: InputMaybe<Array<Mix_Content_Status_Enum>>;
};

/** order by stddev() on columns of table "mix_content" */
export type Mix_Content_Stddev_Order_By = {
  pdfpagecount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  readtime?: InputMaybe<Order_By>;
  recommendorder?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "mix_content" */
export type Mix_Content_Stddev_Pop_Order_By = {
  pdfpagecount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  readtime?: InputMaybe<Order_By>;
  recommendorder?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "mix_content" */
export type Mix_Content_Stddev_Samp_Order_By = {
  pdfpagecount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  readtime?: InputMaybe<Order_By>;
  recommendorder?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "mix_content" */
export type Mix_Content_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mix_Content_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mix_Content_Stream_Cursor_Value_Input = {
  abstractcontents?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  authorname?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Mix_Content_Category_Enum>;
  contentid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  imgurl?: InputMaybe<Scalars['String']['input']>;
  offlineapplyurl?: InputMaybe<Scalars['String']['input']>;
  offlinetime?: InputMaybe<Scalars['timestamp']['input']>;
  originalurl?: InputMaybe<Scalars['String']['input']>;
  pdfpagecount?: InputMaybe<Scalars['Int']['input']>;
  pdfurl?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  readtime?: InputMaybe<Scalars['Int']['input']>;
  recommendorder?: InputMaybe<Scalars['Int']['input']>;
  redirecturl?: InputMaybe<Scalars['String']['input']>;
  reviewer?: InputMaybe<Scalars['uuid']['input']>;
  reviewtime?: InputMaybe<Scalars['timestamp']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Mix_Content_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatetime?: InputMaybe<Scalars['timestamp']['input']>;
};

/** order by sum() on columns of table "mix_content" */
export type Mix_Content_Sum_Order_By = {
  pdfpagecount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  readtime?: InputMaybe<Order_By>;
  recommendorder?: InputMaybe<Order_By>;
};

/** columns and relationships of "mix_content_tag" */
export type Mix_Content_Tag = {
  __typename?: 'mix_content_tag';
  contentid: Scalars['uuid']['output'];
  /** An object relationship */
  mix_content: Mix_Content;
  /** An object relationship */
  mix_content_tag_enum: Mix_Content_Tag_Enum;
  tag: Mix_Content_Tag_Enum_Enum;
};

/** order by aggregate values of table "mix_content_tag" */
export type Mix_Content_Tag_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Mix_Content_Tag_Max_Order_By>;
  min?: InputMaybe<Mix_Content_Tag_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "mix_content_tag". All fields are combined with a logical 'AND'. */
export type Mix_Content_Tag_Bool_Exp = {
  _and?: InputMaybe<Array<Mix_Content_Tag_Bool_Exp>>;
  _not?: InputMaybe<Mix_Content_Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Mix_Content_Tag_Bool_Exp>>;
  contentid?: InputMaybe<Uuid_Comparison_Exp>;
  mix_content?: InputMaybe<Mix_Content_Bool_Exp>;
  mix_content_tag_enum?: InputMaybe<Mix_Content_Tag_Enum_Bool_Exp>;
  tag?: InputMaybe<Mix_Content_Tag_Enum_Enum_Comparison_Exp>;
};

/** mix contetnt tag enum table */
export type Mix_Content_Tag_Enum = {
  __typename?: 'mix_content_tag_enum';
  comment: Scalars['String']['output'];
  /** An array relationship */
  mix_content_tags: Array<Mix_Content_Tag>;
  value: Scalars['String']['output'];
};


/** mix contetnt tag enum table */
export type Mix_Content_Tag_EnumMix_Content_TagsArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Tag_Order_By>>;
  where?: InputMaybe<Mix_Content_Tag_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "mix_content_tag_enum". All fields are combined with a logical 'AND'. */
export type Mix_Content_Tag_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Mix_Content_Tag_Enum_Bool_Exp>>;
  _not?: InputMaybe<Mix_Content_Tag_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Mix_Content_Tag_Enum_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  mix_content_tags?: InputMaybe<Mix_Content_Tag_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

export enum Mix_Content_Tag_Enum_Enum {
  /** 제휴마케팅 */
  AffiliateMarketing = 'affiliate_marketing',
  /** 브랜드마케팅 */
  BrandMarketing = 'brand_marketing',
  /** 콘텐츠마케팅 */
  ContentMarketing = 'content_marketing',
  /** CRM마케팅 */
  CrmMarketing = 'crm_marketing',
  /** 그로스해킹 */
  GrowthHacking = 'growth_hacking',
  /** 마켓트렌드 */
  MarketTrend = 'market_trend',
  /** 일반마케팅 */
  NormalMarketing = 'normal_marketing',
  /** 퍼포먼스마케팅 */
  PerformanceMarketing = 'performance_marketing',
  /** SEO */
  Seo = 'seo'
}

/** Boolean expression to compare columns of type "mix_content_tag_enum_enum". All fields are combined with logical 'AND'. */
export type Mix_Content_Tag_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Mix_Content_Tag_Enum_Enum>;
  _in?: InputMaybe<Array<Mix_Content_Tag_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Mix_Content_Tag_Enum_Enum>;
  _nin?: InputMaybe<Array<Mix_Content_Tag_Enum_Enum>>;
};

/** Ordering options when selecting data from "mix_content_tag_enum". */
export type Mix_Content_Tag_Enum_Order_By = {
  comment?: InputMaybe<Order_By>;
  mix_content_tags_aggregate?: InputMaybe<Mix_Content_Tag_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "mix_content_tag_enum" */
export enum Mix_Content_Tag_Enum_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** Streaming cursor of the table "mix_content_tag_enum" */
export type Mix_Content_Tag_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mix_Content_Tag_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mix_Content_Tag_Enum_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** order by max() on columns of table "mix_content_tag" */
export type Mix_Content_Tag_Max_Order_By = {
  contentid?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "mix_content_tag" */
export type Mix_Content_Tag_Min_Order_By = {
  contentid?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "mix_content_tag". */
export type Mix_Content_Tag_Order_By = {
  contentid?: InputMaybe<Order_By>;
  mix_content?: InputMaybe<Mix_Content_Order_By>;
  mix_content_tag_enum?: InputMaybe<Mix_Content_Tag_Enum_Order_By>;
  tag?: InputMaybe<Order_By>;
};

/** select columns of table "mix_content_tag" */
export enum Mix_Content_Tag_Select_Column {
  /** column name */
  Contentid = 'contentid',
  /** column name */
  Tag = 'tag'
}

/** Streaming cursor of the table "mix_content_tag" */
export type Mix_Content_Tag_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mix_Content_Tag_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mix_Content_Tag_Stream_Cursor_Value_Input = {
  contentid?: InputMaybe<Scalars['uuid']['input']>;
  tag?: InputMaybe<Mix_Content_Tag_Enum_Enum>;
};

/** order by var_pop() on columns of table "mix_content" */
export type Mix_Content_Var_Pop_Order_By = {
  pdfpagecount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  readtime?: InputMaybe<Order_By>;
  recommendorder?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "mix_content" */
export type Mix_Content_Var_Samp_Order_By = {
  pdfpagecount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  readtime?: InputMaybe<Order_By>;
  recommendorder?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "mix_content" */
export type Mix_Content_Variance_Order_By = {
  pdfpagecount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  readtime?: InputMaybe<Order_By>;
  recommendorder?: InputMaybe<Order_By>;
};

/** 원천 소스에 대한 enum 값을 setting합니다. */
export type Mix_Source_Info = {
  __typename?: 'mix_source_info';
  imgurl?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  mix_contents: Array<Mix_Content>;
  source: Scalars['String']['output'];
  sourcename: Scalars['String']['output'];
};


/** 원천 소스에 대한 enum 값을 setting합니다. */
export type Mix_Source_InfoMix_ContentsArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Order_By>>;
  where?: InputMaybe<Mix_Content_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "mix_source_info". All fields are combined with a logical 'AND'. */
export type Mix_Source_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Mix_Source_Info_Bool_Exp>>;
  _not?: InputMaybe<Mix_Source_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Mix_Source_Info_Bool_Exp>>;
  imgurl?: InputMaybe<String_Comparison_Exp>;
  mix_contents?: InputMaybe<Mix_Content_Bool_Exp>;
  source?: InputMaybe<String_Comparison_Exp>;
  sourcename?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "mix_source_info". */
export type Mix_Source_Info_Order_By = {
  imgurl?: InputMaybe<Order_By>;
  mix_contents_aggregate?: InputMaybe<Mix_Content_Aggregate_Order_By>;
  source?: InputMaybe<Order_By>;
  sourcename?: InputMaybe<Order_By>;
};

/** select columns of table "mix_source_info" */
export enum Mix_Source_Info_Select_Column {
  /** column name */
  Imgurl = 'imgurl',
  /** column name */
  Source = 'source',
  /** column name */
  Sourcename = 'sourcename'
}

/** Streaming cursor of the table "mix_source_info" */
export type Mix_Source_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mix_Source_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mix_Source_Info_Stream_Cursor_Value_Input = {
  imgurl?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  sourcename?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "mix_user" */
export type Mix_User = {
  __typename?: 'mix_user';
  career?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamp']['output'];
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['String']['output']>;
  profileImg: Scalars['String']['output'];
  subscribeEmail: Scalars['Boolean']['output'];
};

/** Boolean expression to filter rows from the table "mix_user". All fields are combined with a logical 'AND'. */
export type Mix_User_Bool_Exp = {
  _and?: InputMaybe<Array<Mix_User_Bool_Exp>>;
  _not?: InputMaybe<Mix_User_Bool_Exp>;
  _or?: InputMaybe<Array<Mix_User_Bool_Exp>>;
  career?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<String_Comparison_Exp>;
  profileImg?: InputMaybe<String_Comparison_Exp>;
  subscribeEmail?: InputMaybe<Boolean_Comparison_Exp>;
};

/** Ordering options when selecting data from "mix_user". */
export type Mix_User_Order_By = {
  career?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  profileImg?: InputMaybe<Order_By>;
  subscribeEmail?: InputMaybe<Order_By>;
};

/** select columns of table "mix_user" */
export enum Mix_User_Select_Column {
  /** column name */
  Career = 'career',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  ProfileImg = 'profileImg',
  /** column name */
  SubscribeEmail = 'subscribeEmail'
}

/** Streaming cursor of the table "mix_user" */
export type Mix_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mix_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mix_User_Stream_Cursor_Value_Input = {
  career?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  profileImg?: InputMaybe<Scalars['String']['input']>;
  subscribeEmail?: InputMaybe<Scalars['Boolean']['input']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  ok: Scalars['String']['output'];
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "mix_content" */
  mix_content: Array<Mix_Content>;
  /** fetch data from the table: "mix_content" using primary key columns */
  mix_content_by_pk?: Maybe<Mix_Content>;
  /** fetch data from the table: "mix_content_daily_selected" */
  mix_content_daily_selected: Array<Mix_Content_Daily_Selected>;
  /** fetch data from the table: "mix_content_daily_selected" using primary key columns */
  mix_content_daily_selected_by_pk?: Maybe<Mix_Content_Daily_Selected>;
  /** fetch data from the table: "mix_content_recommend" */
  mix_content_recommend: Array<Mix_Content_Recommend>;
  /** fetch data from the table: "mix_content_recommend" using primary key columns */
  mix_content_recommend_by_pk?: Maybe<Mix_Content_Recommend>;
  /** fetch data from the table: "mix_content_tag" */
  mix_content_tag: Array<Mix_Content_Tag>;
  /** fetch data from the table: "mix_content_tag" using primary key columns */
  mix_content_tag_by_pk?: Maybe<Mix_Content_Tag>;
  /** fetch data from the table: "mix_content_tag_enum" */
  mix_content_tag_enum: Array<Mix_Content_Tag_Enum>;
  /** fetch data from the table: "mix_content_tag_enum" using primary key columns */
  mix_content_tag_enum_by_pk?: Maybe<Mix_Content_Tag_Enum>;
  /** fetch data from the table: "mix_source_info" */
  mix_source_info: Array<Mix_Source_Info>;
  /** fetch data from the table: "mix_source_info" using primary key columns */
  mix_source_info_by_pk?: Maybe<Mix_Source_Info>;
  /** fetch data from the table: "mix_user" */
  mix_user: Array<Mix_User>;
  /** fetch data from the table: "mix_user" using primary key columns */
  mix_user_by_pk?: Maybe<Mix_User>;
  search: Array<SearchResult>;
  session: Session;
};


export type Query_RootMix_ContentArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Order_By>>;
  where?: InputMaybe<Mix_Content_Bool_Exp>;
};


export type Query_RootMix_Content_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMix_Content_Daily_SelectedArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Daily_Selected_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Daily_Selected_Order_By>>;
  where?: InputMaybe<Mix_Content_Daily_Selected_Bool_Exp>;
};


export type Query_RootMix_Content_Daily_Selected_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMix_Content_RecommendArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Recommend_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Recommend_Order_By>>;
  where?: InputMaybe<Mix_Content_Recommend_Bool_Exp>;
};


export type Query_RootMix_Content_Recommend_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMix_Content_TagArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Tag_Order_By>>;
  where?: InputMaybe<Mix_Content_Tag_Bool_Exp>;
};


export type Query_RootMix_Content_Tag_By_PkArgs = {
  contentid: Scalars['uuid']['input'];
  tag: Mix_Content_Tag_Enum_Enum;
};


export type Query_RootMix_Content_Tag_EnumArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Tag_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Tag_Enum_Order_By>>;
  where?: InputMaybe<Mix_Content_Tag_Enum_Bool_Exp>;
};


export type Query_RootMix_Content_Tag_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootMix_Source_InfoArgs = {
  distinct_on?: InputMaybe<Array<Mix_Source_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Source_Info_Order_By>>;
  where?: InputMaybe<Mix_Source_Info_Bool_Exp>;
};


export type Query_RootMix_Source_Info_By_PkArgs = {
  source: Scalars['String']['input'];
};


export type Query_RootMix_UserArgs = {
  distinct_on?: InputMaybe<Array<Mix_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_User_Order_By>>;
  where?: InputMaybe<Mix_User_Bool_Exp>;
};


export type Query_RootMix_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSearchArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  text: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "mix_content" */
  mix_content: Array<Mix_Content>;
  /** fetch data from the table: "mix_content" using primary key columns */
  mix_content_by_pk?: Maybe<Mix_Content>;
  /** fetch data from the table: "mix_content_daily_selected" */
  mix_content_daily_selected: Array<Mix_Content_Daily_Selected>;
  /** fetch data from the table: "mix_content_daily_selected" using primary key columns */
  mix_content_daily_selected_by_pk?: Maybe<Mix_Content_Daily_Selected>;
  /** fetch data from the table in a streaming manner: "mix_content_daily_selected" */
  mix_content_daily_selected_stream: Array<Mix_Content_Daily_Selected>;
  /** fetch data from the table: "mix_content_recommend" */
  mix_content_recommend: Array<Mix_Content_Recommend>;
  /** fetch data from the table: "mix_content_recommend" using primary key columns */
  mix_content_recommend_by_pk?: Maybe<Mix_Content_Recommend>;
  /** fetch data from the table in a streaming manner: "mix_content_recommend" */
  mix_content_recommend_stream: Array<Mix_Content_Recommend>;
  /** fetch data from the table in a streaming manner: "mix_content" */
  mix_content_stream: Array<Mix_Content>;
  /** fetch data from the table: "mix_content_tag" */
  mix_content_tag: Array<Mix_Content_Tag>;
  /** fetch data from the table: "mix_content_tag" using primary key columns */
  mix_content_tag_by_pk?: Maybe<Mix_Content_Tag>;
  /** fetch data from the table: "mix_content_tag_enum" */
  mix_content_tag_enum: Array<Mix_Content_Tag_Enum>;
  /** fetch data from the table: "mix_content_tag_enum" using primary key columns */
  mix_content_tag_enum_by_pk?: Maybe<Mix_Content_Tag_Enum>;
  /** fetch data from the table in a streaming manner: "mix_content_tag_enum" */
  mix_content_tag_enum_stream: Array<Mix_Content_Tag_Enum>;
  /** fetch data from the table in a streaming manner: "mix_content_tag" */
  mix_content_tag_stream: Array<Mix_Content_Tag>;
  /** fetch data from the table: "mix_source_info" */
  mix_source_info: Array<Mix_Source_Info>;
  /** fetch data from the table: "mix_source_info" using primary key columns */
  mix_source_info_by_pk?: Maybe<Mix_Source_Info>;
  /** fetch data from the table in a streaming manner: "mix_source_info" */
  mix_source_info_stream: Array<Mix_Source_Info>;
  /** fetch data from the table: "mix_user" */
  mix_user: Array<Mix_User>;
  /** fetch data from the table: "mix_user" using primary key columns */
  mix_user_by_pk?: Maybe<Mix_User>;
  /** fetch data from the table in a streaming manner: "mix_user" */
  mix_user_stream: Array<Mix_User>;
};


export type Subscription_RootMix_ContentArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Order_By>>;
  where?: InputMaybe<Mix_Content_Bool_Exp>;
};


export type Subscription_RootMix_Content_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMix_Content_Daily_SelectedArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Daily_Selected_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Daily_Selected_Order_By>>;
  where?: InputMaybe<Mix_Content_Daily_Selected_Bool_Exp>;
};


export type Subscription_RootMix_Content_Daily_Selected_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMix_Content_Daily_Selected_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mix_Content_Daily_Selected_Stream_Cursor_Input>>;
  where?: InputMaybe<Mix_Content_Daily_Selected_Bool_Exp>;
};


export type Subscription_RootMix_Content_RecommendArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Recommend_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Recommend_Order_By>>;
  where?: InputMaybe<Mix_Content_Recommend_Bool_Exp>;
};


export type Subscription_RootMix_Content_Recommend_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMix_Content_Recommend_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mix_Content_Recommend_Stream_Cursor_Input>>;
  where?: InputMaybe<Mix_Content_Recommend_Bool_Exp>;
};


export type Subscription_RootMix_Content_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mix_Content_Stream_Cursor_Input>>;
  where?: InputMaybe<Mix_Content_Bool_Exp>;
};


export type Subscription_RootMix_Content_TagArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Tag_Order_By>>;
  where?: InputMaybe<Mix_Content_Tag_Bool_Exp>;
};


export type Subscription_RootMix_Content_Tag_By_PkArgs = {
  contentid: Scalars['uuid']['input'];
  tag: Mix_Content_Tag_Enum_Enum;
};


export type Subscription_RootMix_Content_Tag_EnumArgs = {
  distinct_on?: InputMaybe<Array<Mix_Content_Tag_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Content_Tag_Enum_Order_By>>;
  where?: InputMaybe<Mix_Content_Tag_Enum_Bool_Exp>;
};


export type Subscription_RootMix_Content_Tag_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootMix_Content_Tag_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mix_Content_Tag_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Mix_Content_Tag_Enum_Bool_Exp>;
};


export type Subscription_RootMix_Content_Tag_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mix_Content_Tag_Stream_Cursor_Input>>;
  where?: InputMaybe<Mix_Content_Tag_Bool_Exp>;
};


export type Subscription_RootMix_Source_InfoArgs = {
  distinct_on?: InputMaybe<Array<Mix_Source_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_Source_Info_Order_By>>;
  where?: InputMaybe<Mix_Source_Info_Bool_Exp>;
};


export type Subscription_RootMix_Source_Info_By_PkArgs = {
  source: Scalars['String']['input'];
};


export type Subscription_RootMix_Source_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mix_Source_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Mix_Source_Info_Bool_Exp>;
};


export type Subscription_RootMix_UserArgs = {
  distinct_on?: InputMaybe<Array<Mix_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mix_User_Order_By>>;
  where?: InputMaybe<Mix_User_Bool_Exp>;
};


export type Subscription_RootMix_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMix_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mix_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Mix_User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};
