import { useState } from "react";
import { Plus, Image, FileText, Link as LinkIcon, Video, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import professionalPhoto from "@/assets/professional-photo.jpeg";

const Gallery = () => {
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [postType, setPostType] = useState<"photo" | "article" | "link" | "video">("article");

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Profile Header */}
      <header className="sticky top-0 z-40 glass border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/40 shadow-lg">
              <img 
                src={professionalPhoto} 
                alt="Adithya Srivatsa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="font-display text-3xl font-bold">Adithya Srivatsa</h1>
              <p className="text-muted-foreground mt-1">
                AI/ML Engineer • Builder • Writer • Creating at the intersection of technology and creativity
              </p>
            </div>
            <Dialog open={isComposerOpen} onOpenChange={setIsComposerOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2 neural-glow hidden md:flex">
                  <Plus className="h-5 w-5" />
                  Create Post
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl">Create New Post</DialogTitle>
                </DialogHeader>
                
                {/* Post Type Selector */}
                <div className="flex gap-2 mb-4">
                  <Button
                    variant={postType === "photo" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPostType("photo")}
                    className="gap-2"
                  >
                    <Image className="h-4 w-4" />
                    Photo
                  </Button>
                  <Button
                    variant={postType === "article" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPostType("article")}
                    className="gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Article
                  </Button>
                  <Button
                    variant={postType === "link" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPostType("link")}
                    className="gap-2"
                  >
                    <LinkIcon className="h-4 w-4" />
                    Link
                  </Button>
                  <Button
                    variant={postType === "video" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPostType("video")}
                    className="gap-2"
                  >
                    <Video className="h-4 w-4" />
                    Video
                  </Button>
                </div>

                {/* Post Composer Form */}
                <div className="space-y-4">
                  <Input
                    placeholder="Title (optional)"
                    className="text-lg"
                  />
                  <Textarea
                    placeholder="What's on your mind?"
                    className="min-h-[120px] resize-none"
                  />
                  
                  {postType === "photo" && (
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Image className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                    </div>
                  )}
                  
                  {postType === "link" && (
                    <Input
                      placeholder="Paste URL here..."
                      type="url"
                    />
                  )}
                  
                  {postType === "video" && (
                    <Input
                      placeholder="YouTube or video URL..."
                      type="url"
                    />
                  )}
                  
                  <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onClick={() => setIsComposerOpen(false)}>
                      Cancel
                    </Button>
                    <Button className="neural-glow">
                      Publish
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Main Feed Area */}
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Empty State */}
        <Card className="border-2 border-dashed border-border/50 bg-card/50">
          <CardContent className="py-16 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Plus className="h-12 w-12 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold mb-2">No posts yet</h2>
            <p className="text-muted-foreground mb-6">
              Start creating something amazing ✨
            </p>
            <Button 
              size="lg" 
              className="gap-2 neural-glow"
              onClick={() => setIsComposerOpen(true)}
            >
              <Plus className="h-5 w-5" />
              Create Your First Post
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* Floating Action Button (Mobile) */}
      <Button
        size="lg"
        className="md:hidden fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg neural-glow"
        onClick={() => setIsComposerOpen(true)}
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Gallery;
