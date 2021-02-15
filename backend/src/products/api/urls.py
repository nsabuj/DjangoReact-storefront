# from articles.api.views import ArticleViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', ArticleViewSet, base_name='articles')
# urlpatterns = router.urls

from django.urls import path


from .views import (
    ProductListView,
    ProductDetailView,

)

urlpatterns = [
    path('', ProductListView.as_view()),
    path('<pk>', ProductDetailView.as_view()),

]
