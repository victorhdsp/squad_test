const mockTopics = {
    "1": {
      title: "Best practices for mobile navigation patterns",
      author: {
        name: "Sarah Wilson",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces"
      },
      category: "Mobile Design",
      replies: 24,
      likes: 56,
      excerpt: "I'm working on a complex mobile app and I'm curious about different navigation patterns. What are your thoughts on bottom tabs vs hamburger menus?",
      timestamp: "2 hours ago",
      comments: []
    },
    "2": {
      title: "User testing methods for enterprise applications",
      author: {
        name: "Mike Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces"
      },
      category: "User Research",
      replies: 18,
      likes: 42,
      excerpt: "Looking for recommendations on effective user testing methods specifically for enterprise applications. What approaches have worked well for you?",
      timestamp: "5 hours ago",
      comments: []
    },
    "3": {
      title: "Design systems: Monolithic vs Distributed",
      author: {
        name: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
      },
      category: "Design Systems",
      replies: 31,
      likes: 89,
      excerpt: "We're scaling our design system and debating between a monolithic approach versus a more distributed model. Would love to hear experiences from both sides.",
      timestamp: "1 day ago",
      comments: [
        {
          id: "1",
          author: {
            name: "Alex Thompson",
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop&crop=faces"
          },
          content: "This is a really interesting perspective. I've been working on something similar and found that...",
          date: "2 hours ago"
        },
        {
          id: "2",
          author: {
            name: "Maria Garcia",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
          },
          content: "Great points! Have you considered looking into the research by Nielsen Norman Group on this topic?",
          date: "1 hour ago"
        }
      ]
    }
  }
  
  const announcements = [
    {
      id: "1",
      title: "New Community Guidelines",
      content: "We've updated our community guidelines to ensure a better experience for all members. Please take a moment to review the changes.",
      author: {
        name: "Admin Team",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces"
      },
      date: "2024-03-20",
      comments: [
        {
          id: "1",
          author: {
            name: "Sarah Wilson",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces"
          },
          content: "Great updates! The new guidelines are much clearer.",
          date: "2024-03-20"
        },
        {
          id: "2",
          author: {
            name: "Mike Chen",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces"
          },
          content: "Looking forward to seeing how these changes improve our community discussions.",
          date: "2024-03-20"
        }
      ]
    },
    {
      id: "2",
      title: "Platform Maintenance Schedule",
      content: "We will be performing scheduled maintenance this weekend to improve platform performance. Expected downtime: 2 hours.",
      author: {
        name: "Tech Team",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=64&h=64&fit=crop&crop=faces"
      },
      date: "2024-03-19",
      comments: [
        {
          id: "3",
          author: {
            name: "Emma Rodriguez",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
          },
          content: "Will this affect any ongoing discussions?",
          date: "2024-03-19"
        }
      ]
    }
  ]