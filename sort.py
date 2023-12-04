import pygame
import random
import threading

# Initialize Pygame
pygame.init()

# Screen dimensions
width, height = 800, 600
screen = pygame.display.set_mode((width, height))

# Colors
WHITE = (255, 255, 255)
BLUE = (0, 0, 255)
GREEN = (0, 255, 0)

# Array settings
array_size = 50
max_bar_height = height - 10  # Subtract a bit to ensure bars fit in the window
array = [(i / array_size) * max_bar_height for i in range(array_size)]
bar_width = width // array_size

random.shuffle(array)

# Sorting variables
is_sorting = False
sorting_done = False

# Function to perform Bubble Sort
def bubble_sort(arr):
    global sorting_done
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
        pygame.time.wait(50)  # Delay for visualization
    sorting_done = True

# Create a separate thread for sorting
sorting_thread = threading.Thread(target=bubble_sort, args=(array,))

# Main loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE and not is_sorting:
                is_sorting = True
                sorting_done = False
                sorting_thread = threading.Thread(target=bubble_sort, args=(array,))
                sorting_thread.start()

    screen.fill(WHITE)
    for i, height in enumerate(array):
        color = GREEN if sorting_done else BLUE
        pygame.draw.rect(screen, color, (i * bar_width, 600 - height, bar_width, height))
    pygame.display.flip()

    if sorting_done:
        is_sorting = False

# Quit Pygame
pygame.quit()
