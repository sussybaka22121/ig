import { useState, useEffect } from "react";
import InstagramLogo from "../assets/instagramlogo.png";
import InstagramHorizontalLogo from "../assets/Instagram-Logo.png"
import maxImage from "../assets/max.png";
import metaAILogo from "../assets/image.png";

// Import all profile pictures
import userimage1 from "../assets/pfps/userimage1.jpeg";
import userimage2 from "../assets/pfps/userimage2.jpg";
import userimage3 from "../assets/pfps/userimage3.jpg";
import userimage4 from "../assets/pfps/userimage4.jpg";
import userimage5 from "../assets/pfps/userimage5.jpg";
import userimage6 from "../assets/pfps/userimage6.jpg";
import userimage7 from "../assets/pfps/userimage7.jpg";
import userimage8 from "../assets/pfps/userimage8.jpg";
import userimage9 from "../assets/pfps/userimage9.jpg";

// Icons
const HeartIcon = () => (
  <svg
    aria-label="Like"
    color="white"
    fill="white"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z" />
  </svg>
);

const CommentIcon = () => (
  <svg
    aria-label="Comment"
    color="white"
    fill="white"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title>Comment</title>
    <path
      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const ShareIcon = () => (
  <svg
    aria-label="Share post"
    color="white"
    fill="white"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
    <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
  </svg>
);

const SaveIcon = () => (
  <svg
    aria-label="Save"
    color="white"
    fill="white"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <polygon
      fill="none"
      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const VerifiedBadge = () => (
  <svg
    aria-label="Verified"
    className="inline-block ml-1"
    color="rgb(0, 149, 246)"
    fill="rgb(0, 149, 246)"
    height="12"
    role="img"
    viewBox="0 0 40 40"
    width="12"
  >
    <title>Verified</title>
    <path
      d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
      fillRule="evenodd"
    />
  </svg>
);

const MoreIcon = () => (
  <svg
    aria-label="More options"
    color="white"
    fill="white"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="6" cy="12" r="1.5" />
    <circle cx="18" cy="12" r="1.5" />
  </svg>
);

const ExploreIcon = () => (
  <svg
    aria-label="Explore"
    color="white"
    fill="white"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
    <polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon>
    <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
  </svg>
);

const BookmarkIcon = () => (
  <svg
    aria-label="Save"
    color="white"
    fill="white"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
  </svg>
);

function App() {
  const [showMoreComments, setShowMoreComments] = useState(false);
  const [userProfilePics, setUserProfilePics] = useState<Record<string, string>>({});
  
  // Create an array of all profile pictures
  const profilePics = [
    userimage1, userimage2, userimage3, userimage4, userimage5,
    userimage6, userimage7, userimage8, userimage9
  ];
  
  // Post content
  const postImage = {
    id: "img1",
    src: maxImage,
  };

  const comments = [
    {
      id: "comment1",
      username: "jessica_smith92",
      comment: "MAXXXX 😍🤯",
      time: "5 s",
      likes: 12,
    },
    {
      id: "comment2",
      username: "mike.johnson",
      comment: "What a cute dog! The fur details are amazing",
      time: "8 s",
      likes: 8,
    },
    {
      id: "comment3",
      username: "sarah.smith",
      comment: "Max is adorable! What prompt did you use to generate this?",
      time: "3 s",
      likes: 5,
    },
  ];

  // Assign random profile pictures to users on component mount
  useEffect(() => {
    const randomizePfps = () => {
      const pics: Record<string, string> = {};
      // Assign to comment users
      comments.forEach(comment => {
        const randomIndex = Math.floor(Math.random() * profilePics.length);
        pics[comment.id] = profilePics[randomIndex];
      });
      
      // Also assign for the Rolling Stone avatar
      // pics['rollingStone'] = profilePics[Math.floor(Math.random() * profilePics.length)];
      
      setUserProfilePics(pics);
    };
    
    randomizePfps();
  }, []);

  const visibleComments = showMoreComments ? comments : comments.slice(0, 3);

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center">
      {/* Instagram Header */}
      <header className="w-full border-b border-neutral-800 bg-black flex justify-between items-center py-2 px-4 lg:px-40">
        <div>
          <img 
            src={InstagramHorizontalLogo} 
            alt="Instagram" 
            className="h-12 cursor-pointer" 
            onClick={() => window.location.href = "https://www.instagram.com"}
          />
        </div>
        <div className="flex space-x-3">
          <button 
            className="bg-[#0095f6] text-white px-4 py-1.5 rounded-lg font-medium text-sm"
            onClick={() => window.location.href = "https://www.instagram.com/accounts/login/?source=auth_switcher"}
          >
            Log in
          </button>
          <button 
            className="text-[#0095f6] py-1.5 font-medium text-sm"
            onClick={() => window.location.href = "https://www.instagram.com/accounts/emailsignup/"}
          >
            Sign up
          </button>
        </div>
      </header>

      {/* Post Container */}
      <main className="w-full max-w-[935px] flex flex-col md:flex-row border border-neutral-800 mt-5 bg-black">
        {/* Left Side - Post Image */}
        <div className="md:w-3/5 bg-black relative">
          <div className="overflow-hidden">
            <img
              src={postImage.src}
              alt="Vilen portrait"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Post Info and Comments */}
        <div className="md:w-2/5 border-l border-neutral-800 flex flex-col bg-black">
          {/* User Info */}
          <div className="flex items-center justify-between p-3 border-b border-neutral-800">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
                <img
                  src={metaAILogo}
                  alt="Meta AI avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center">
                <span 
                  className="font-semibold text-sm cursor-pointer" 
                  onClick={() => window.location.href = "https://www.instagram.com/meta.ai/"}
                >
                  meta.ai
                </span>
                <VerifiedBadge />
              </div>
            </div>
            <button aria-label="More options">
              <MoreIcon />
            </button>
          </div>

          {/* Post Description */}
          <div className="p-3 border-b border-neutral-800">
            <div className="mb-2">
              <p className="text-sm">
                🐕 Meet Max, a golden retriever we generated using our latest image generation model. Incredible how AI can now create such realistic pets!
              </p>
            </div>
          </div>

          {/* Comments */}
          <div className="flex-1 overflow-y-auto">
            {visibleComments.map((comment) => (
              <div key={comment.id} className="flex py-2 px-3">
                <div className="h-8 w-8 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <img
                    src={userProfilePics[comment.id] || `https://source.unsplash.com/random/100x100/?portrait,${comment.id}`}
                    alt={`${comment.username} avatar`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <span className="font-semibold text-sm mr-2">{comment.username}</span>
                      <span className="text-sm">{comment.comment}</span>
                      <div className="text-xs text-neutral-500 mt-1 flex items-center">
                        <span>{comment.time}</span>
                        <button className="ml-3 font-semibold">Like</button>
                        <button className="ml-3 font-semibold">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interaction Buttons */}
          <div className="px-3 pt-1 pb-1">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-4">
                <button aria-label="Like">
                  <HeartIcon />
                </button>
                <button aria-label="Comment">
                  <CommentIcon />
                </button>
                <button aria-label="Share">
                  <ShareIcon />
                </button>
              </div>
              <button aria-label="Save">
                <BookmarkIcon />
              </button>
            </div>
            <div className="mb-1 text-sm">2,292 likes</div>
            <div className="text-[12px] text-neutral-500 mb-2">
              20 seconds ago
            </div>
          </div>

          {/* Comment Input */}
          <div className="px-3 py-3 text-sm text-left">
            <span 
              className="text-[#0095f6] cursor-pointer"
              onClick={() => window.location.href = "https://www.instagram.com/accounts/login/?source=auth_switcher"}
            >
              Log in
            </span>
            <span className="text-neutral-300"> to like or comment.</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
