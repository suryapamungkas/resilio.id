'use client';

import React from 'react';
import { AudienceSegment } from '@/types';
import { testimonialsData } from '@/data/testimonialsData';
import { MessageSquareQuote, Star, MapPin, CheckCircle2 } from 'lucide-react';

interface TestimonialsSectionProps {
  currentSegment: AudienceSegment;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentSegment }) => {
  const sortedTestimonials = [...testimonialsData].sort((a, b) => {
    if (a.segment === currentSegment && b.segment !== currentSegment) return -1;
    if (a.segment !== currentSegment && b.segment === currentSegment) return 1;
    return 0;
  });

  return (
    <section className="py-16 sm:py-24 bg-resilio-mint-50/60 border-b border-resilio-mint-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-resilio-mint-100 border border-resilio-mint-300 text-resilio-emerald-800 text-xs font-bold uppercase tracking-wider">
            <MessageSquareQuote className="w-3.5 h-3.5 text-resilio-cyanSoft-600" />
            <span>Kisah Nyata Dampak Sosial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-resilio-emerald-800 tracking-tight">
            Berdiri Tegak Saat Badai Ekonomi Menghantam
          </h2>

          <p className="text-base text-resilio-emerald-950/80 leading-relaxed font-normal">
            Bagaimana keluarga dan komunitas di berbagai penjuru Indonesia mempertahankan martabat ekonomi mereka melalui ekosistem Resilio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-resilio-mint-200 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Location */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-resilio-emerald-700 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-resilio-cyanSoft-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Headline & Quote */}
                <h3 className="text-lg font-black text-resilio-emerald-900 mb-3 leading-snug">
                  &ldquo;{item.headline}&rdquo;
                </h3>
                <p className="text-sm text-resilio-emerald-950/80 leading-relaxed mb-6 font-normal">
                  {item.story}
                </p>
              </div>

              {/* Author Info & Impact Metric */}
              <div className="pt-4 border-t border-resilio-mint-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-resilio-emerald-800 text-resilio-cyanSoft-300 flex items-center justify-center font-bold text-xs">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-resilio-emerald-900">{item.name}</h4>
                    <p className="text-[11px] text-resilio-emerald-700 line-clamp-1 font-medium">{item.role}</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-resilio-mint-100 border border-resilio-mint-300 text-resilio-emerald-800 text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-resilio-cyanSoft-600 shrink-0" />
                  <span>{item.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
