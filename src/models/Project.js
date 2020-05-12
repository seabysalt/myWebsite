class Project {
  constructor(id, title, subtitle, description, techStack, deployment, time, githubLink, demoLink, imageUrl, externalLink, color, titleColor) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.techStack = techStack;
    this.deployment = deployment;
    this.time = time;
    this.githubLink = githubLink;
    this.demoLink = demoLink;
    this.imageUrl = imageUrl;
    this.externalLink = externalLink;
    this.color = color;
    this.titleColor = titleColor;
  }
}

export default Project;