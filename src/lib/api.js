export const postsQuery= `*[_type == 'post']{
  _id, 
  title, 
  slug, 
  body,
  mainImage{
    asset->{
      _id,
      url,
      height,
      width
    }, 
    alt
  },
  text[]{
    ...,
  _type == 'muxVideo'=>{
    asset->{
      ...,
      'url': 'https://stream.mux.com' + playbackID
    }
  }}
  
  }`;

export const people = `*[_type == 'people']{
  title,
  position,
  image
  
}`;

export const bodyVideo = `*[_type == 'videopost']{
  title,
  asset ->{
    url:"https://stream.mux.com/" + playbackId
  }
}`;
