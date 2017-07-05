require 'test_helper'

class MyPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get my_pages_home_url
    assert_response :success
  end

  test "should get projects" do
    get my_pages_projects_url
    assert_response :success
  end

  test "should get family" do
    get my_pages_family_url
    assert_response :success
  end

  test "should get story" do
    get my_pages_story_url
    assert_response :success
  end

  test "should get poetry" do
    get my_pages_poetry_url
    assert_response :success
  end

  test "should get contact" do
    get my_pages_contact_url
    assert_response :success
  end

end
