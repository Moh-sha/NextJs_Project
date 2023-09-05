import React from "react";

const RoseBlogDetails = () => {
  const blogTitle = "Rose: The Symbol of Love and Beauty";
  const blogAuthor = "Shafin";

  const blogContent = `
    Roses are one of the most beloved flowers in the world. They are not just beautiful but also hold deep symbolic meaning. They have been associated with love, passion, and beauty for centuries.

    In various cultures, roses have been used to convey emotions and feelings. The red rose, in particular, is a universal symbol of love and romance. It is often given as a token of affection on special occasions such as Valentine's Day or anniversaries.

    Apart from their symbolic significance, roses also have practical uses. Rose oil and rose water are widely used in the beauty industry for their soothing and nourishing properties. Rose petals are used in culinary delights and various herbal teas.

    The cultivation of roses has a rich history, and today, there are thousands of rose varieties available in different colors and shapes. Each variety carries its own unique charm and allure.

    Whether you're expressing your love to someone special or simply enjoying the beauty of roses in a garden, these exquisite flowers never fail to captivate the heart.

    Next time you encounter a rose, take a moment to appreciate its beauty and the emotions it represents.

    Happy gardening!
  `;

  return (
    <div>
      <h1>{blogTitle}</h1>
      <p>
        <strong>{blogAuthor}</strong>
      </p>
      <div>
        <p>{blogContent}</p>
      </div>
    </div>
  );
};

export default RoseBlogDetails;
