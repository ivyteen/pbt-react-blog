const postList = [
    {
      "no": 1,
      "title": "Lorem ipsum dolor sit amet",
      "content": "Morbi a ultricies a diam vitae vestibulum. In fringilla in nisl quis dapibus. Sed ac metus ut ipsum tincidunt semper vel non metus. Etiam pharetra ipsum nec turpis maximus, in lobortis felis gravida. Curabitur egestas tempus nulla, non venenatis mauris commodo et. Morbi sed lobortis tortor, sit amet ultricies urna. Praesent pellentesque laoreet mi ut volutpat. Vestibulum fringilla posuere ligula a dignissim. Phasellus elit nisi, scelerisque eget aliquam sit amet, fermentum vel quam. Curabitur ut pharetra arcu. Vivamus vel interdum neque. Nullam sed accumsan augue, sit amet dictum leo. Phasellus sit amet suscipit ipsum, sed tincidunt lectus. Sed sed luctus lacus. Curabitur eu hendrerit elit.\nEtiam velit erat, dignissim a gravida in, laoreet sed eros. Nullam pellentesque, risus in semper pharetra, mauris nisi pulvinar justo, at cursus nulla quam non odio. Etiam eget nunc ac nunc convallis consectetur. In malesuada iaculis ultricies. Vivamus eleifend nec metus vitae rhoncus. In id eleifend felis. Nulla nec turpis egestas, tempor purus vel, facilisis odio. Morbi nec purus ligula. Sed volutpat velit eget velit ullamcorper, in vehicula ex rhoncus.\nUt ante arcu, mattis eget mauris at, semper varius purus. Donec ornare mollis sapien eget cursus. Vestibulum id congue dolor. Proin auctor at mauris at bibendum. Nunc massa purus, molestie vitae facilisis sit amet, imperdiet ac eros. Sed nec tellus accumsan, facilisis metus nec, sodales ante. Nulla sed euismod mi, at congue odio. Maecenas non tempor justo. Aenean dolor felis, pharetra sed lobortis molestie, porta non turpis. Suspendisse dignissim felis ut viverra varius.",
      "createDate": "2020-10-25",
      "readCount": 6
    },
    {
      "no": 2,
      "title": "Etiam sapien risus, tempor at.",
      "content": "Morbi b ultricies a diam vitae vestibulum. In fringilla in nisl quis dapibus. Sed ac metus ut ipsum tincidunt semper vel non metus. Etiam pharetra ipsum nec turpis maximus, in lobortis felis gravida. Curabitur egestas tempus nulla, non venenatis mauris commodo et. Morbi sed lobortis tortor, sit amet ultricies urna. Praesent pellentesque laoreet mi ut volutpat. Vestibulum fringilla posuere ligula a dignissim. Phasellus elit nisi, scelerisque eget aliquam sit amet, fermentum vel quam. Curabitur ut pharetra arcu. Vivamus vel interdum neque. Nullam sed accumsan augue, sit amet dictum leo. Phasellus sit amet suscipit ipsum, sed tincidunt lectus. Sed sed luctus lacus. Curabitur eu hendrerit elit.\nEtiam velit erat, dignissim a gravida in, laoreet sed eros. Nullam pellentesque, risus in semper pharetra, mauris nisi pulvinar justo, at cursus nulla quam non odio. Etiam eget nunc ac nunc convallis consectetur. In malesuada iaculis ultricies. Vivamus eleifend nec metus vitae rhoncus. In id eleifend felis. Nulla nec turpis egestas, tempor purus vel, facilisis odio. Morbi nec purus ligula. Sed volutpat velit eget velit ullamcorper, in vehicula ex rhoncus.\nUt ante arcu, mattis eget mauris at, semper varius purus. Donec ornare mollis sapien eget cursus. Vestibulum id congue dolor. Proin auctor at mauris at bibendum. Nunc massa purus, molestie vitae facilisis sit amet, imperdiet ac eros. Sed nec tellus accumsan, facilisis metus nec, sodales ante. Nulla sed euismod mi, at congue odio. Maecenas non tempor justo. Aenean dolor felis, pharetra sed lobortis molestie, porta non turpis. Suspendisse dignissim felis ut viverra varius.",
      "createDate": "2020-10-25",
      "readCount": 5
    },
    {
      "no": 3,
      "title": "Aliquam a eros diam",
      "content": "Morbi c ultricies a diam vitae vestibulum. In fringilla in nisl quis dapibus. Sed ac metus ut ipsum tincidunt semper vel non metus. Etiam pharetra ipsum nec turpis maximus, in lobortis felis gravida. Curabitur egestas tempus nulla, non venenatis mauris commodo et. Morbi sed lobortis tortor, sit amet ultricies urna. Praesent pellentesque laoreet mi ut volutpat. Vestibulum fringilla posuere ligula a dignissim. Phasellus elit nisi, scelerisque eget aliquam sit amet, fermentum vel quam. Curabitur ut pharetra arcu. Vivamus vel interdum neque. Nullam sed accumsan augue, sit amet dictum leo. Phasellus sit amet suscipit ipsum, sed tincidunt lectus. Sed sed luctus lacus. Curabitur eu hendrerit elit.\nEtiam velit erat, dignissim a gravida in, laoreet sed eros. Nullam pellentesque, risus in semper pharetra, mauris nisi pulvinar justo, at cursus nulla quam non odio. Etiam eget nunc ac nunc convallis consectetur. In malesuada iaculis ultricies. Vivamus eleifend nec metus vitae rhoncus. In id eleifend felis. Nulla nec turpis egestas, tempor purus vel, facilisis odio. Morbi nec purus ligula. Sed volutpat velit eget velit ullamcorper, in vehicula ex rhoncus.\nUt ante arcu, mattis eget mauris at, semper varius purus. Donec ornare mollis sapien eget cursus. Vestibulum id congue dolor. Proin auctor at mauris at bibendum. Nunc massa purus, molestie vitae facilisis sit amet, imperdiet ac eros. Sed nec tellus accumsan, facilisis metus nec, sodales ante. Nulla sed euismod mi, at congue odio. Maecenas non tempor justo. Aenean dolor felis, pharetra sed lobortis molestie, porta non turpis. Suspendisse dignissim felis ut viverra varius.",
      "createDate": "2020-10-25",
      "readCount": 1
    },
    {
      "no": 4,
      "title": "Ut condimentum",
      "content": "Morbi d ultricies a diam vitae vestibulum. In fringilla in nisl quis dapibus. Sed ac metus ut ipsum tincidunt semper vel non metus. Etiam pharetra ipsum nec turpis maximus, in lobortis felis gravida. Curabitur egestas tempus nulla, non venenatis mauris commodo et. Morbi sed lobortis tortor, sit amet ultricies urna. Praesent pellentesque laoreet mi ut volutpat. Vestibulum fringilla posuere ligula a dignissim. Phasellus elit nisi, scelerisque eget aliquam sit amet, fermentum vel quam. Curabitur ut pharetra arcu. Vivamus vel interdum neque. Nullam sed accumsan augue, sit amet dictum leo. Phasellus sit amet suscipit ipsum, sed tincidunt lectus. Sed sed luctus lacus. Curabitur eu hendrerit elit.\nEtiam velit erat, dignissim a gravida in, laoreet sed eros. Nullam pellentesque, risus in semper pharetra, mauris nisi pulvinar justo, at cursus nulla quam non odio. Etiam eget nunc ac nunc convallis consectetur. In malesuada iaculis ultricies. Vivamus eleifend nec metus vitae rhoncus. In id eleifend felis. Nulla nec turpis egestas, tempor purus vel, facilisis odio. Morbi nec purus ligula. Sed volutpat velit eget velit ullamcorper, in vehicula ex rhoncus.\nUt ante arcu, mattis eget mauris at, semper varius purus. Donec ornare mollis sapien eget cursus. Vestibulum id congue dolor. Proin auctor at mauris at bibendum. Nunc massa purus, molestie vitae facilisis sit amet, imperdiet ac eros. Sed nec tellus accumsan, facilisis metus nec, sodales ante. Nulla sed euismod mi, at congue odio. Maecenas non tempor justo. Aenean dolor felis, pharetra sed lobortis molestie, porta non turpis. Suspendisse dignissim felis ut viverra varius.",
      "createDate": "2020-10-25",
      "readCount": 2
    },
    {
      "no": 5,
      "title": "Nulla et metus vel enim",
      "content": "Morbi ultricies a diam vitae vestibulum. In fringilla in nisl quis dapibus. Sed ac metus ut ipsum tincidunt semper vel non metus. Etiam pharetra ipsum nec turpis maximus, in lobortis felis gravida. Curabitur egestas tempus nulla, non venenatis mauris commodo et. Morbi sed lobortis tortor, sit amet ultricies urna. Praesent pellentesque laoreet mi ut volutpat. Vestibulum fringilla posuere ligula a dignissim. Phasellus elit nisi, scelerisque eget aliquam sit amet, fermentum vel quam. Curabitur ut pharetra arcu. Vivamus vel interdum neque. Nullam sed accumsan augue, sit amet dictum leo. Phasellus sit amet suscipit ipsum, sed tincidunt lectus. Sed sed luctus lacus. Curabitur eu hendrerit elit.\nEtiam velit erat, dignissim a gravida in, laoreet sed eros. Nullam pellentesque, risus in semper pharetra, mauris nisi pulvinar justo, at cursus nulla quam non odio. Etiam eget nunc ac nunc convallis consectetur. In malesuada iaculis ultricies. Vivamus eleifend nec metus vitae rhoncus. In id eleifend felis. Nulla nec turpis egestas, tempor purus vel, facilisis odio. Morbi nec purus ligula. Sed volutpat velit eget velit ullamcorper, in vehicula ex rhoncus.\nUt ante arcu, mattis eget mauris at, semper varius purus. Donec ornare mollis sapien eget cursus. Vestibulum id congue dolor. Proin auctor at mauris at bibendum. Nunc massa purus, molestie vitae facilisis sit amet, imperdiet ac eros. Sed nec tellus accumsan, facilisis metus nec, sodales ante. Nulla sed euismod mi, at congue odio. Maecenas non tempor justo. Aenean dolor felis, pharetra sed lobortis molestie, porta non turpis. Suspendisse dignissim felis ut viverra varius.",
      "createDate": "2020-10-25",
      "readCount": 4
    },
];
  
  
const getPostByNo = no => {
    console.log("post no ",typeof(no))
    let obj = postList.find(x => (x.no === no));
    if (obj !== null) {
        console.log(obj)
        return obj;
    }
    return null;
}


export { postList, getPostByNo };
//export default postList;