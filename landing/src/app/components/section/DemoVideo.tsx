"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor } from "lucide-react";

export function DemoVideo() {
    return (
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white px-4">
                        See it in action
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-300 max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
                        Watch how the CLI tool creates a beautiful, modern developer portfolio in seconds
                    </p>
                </div>

                <div className="max-w-2xl sm:max-w-3xl lg:max-w-5xl mx-auto">
                    <Card className="bg-white/3 p-3 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative aspect-video group overflow-hidden">
                                <iframe
                                    src="https://www.youtube.com/embed/enjkcCdAlXc?rel=0&modestbranding=1&controls=1&showinfo=0"
                                    title="create-neo-portfolio-demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full object-cover rounded-t-lg sm:rounded-t-xl"
                                />
                            </div>
                            <div className="p-4 sm:p-6 lg:p-8 bg-black/40 border-t border-white/5 rounded-b-lg sm:rounded-b-xl">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                                    <div className="space-y-1 sm:space-y-2">
                                        <h4 className="text-lg sm:text-xl font-bold text-white">
                                            Complete Portfolio Setup
                                        </h4>
                                        <p className="text-sm sm:text-base text-gray-400">
                                            See the entire process from CLI command to live portfolio
                                        </p>
                                    </div>
                                    <Badge className="py-2 px-3 bg-white/10 text-gray-300 border-white/10 self-start sm:self-center">
                                        <Monitor className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                        <span className="text-xs sm:text-sm">2:52 Duration</span>
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}