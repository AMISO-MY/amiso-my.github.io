module Jekyll
  class RedirectPage < Page
    def initialize(site, base, dir, name, title, target_link)
      @site = site
      @base = base
      @dir = dir
      @name = name
      layout = site.layouts['shortlink_redirect']
      self.process(@name)

      self.read_yaml(File.join(base, '_layouts'), 'shortlink_redirect.html')
      self.data['title'] = name
      self.data['redirect'] = target_link
    end
  end

  class RedirectGenerator < Generator
    safe true
    priority :low

    def generate(site)
      links = site.data['links']
      links.each do |link|
        site.pages << RedirectPage.new(site, site.source, File.join('go', link['short_link']), 'index.html', link['title'], link['target_link'])
      end
    end
  end
end
